<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

class AuthenticatedSessionController extends Controller
{

    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'canRegister' => Route::has('register'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     */
    public function store(LoginRequest $request)
    {

        $request->authenticate();
        $request->session()->regenerate();

        $guru =  $request->user()->hasRole('guru');
        $siswa =  $request->user()->hasRole('siswa');

        if ($guru) {
            return redirect()->route('dashboard-guru');
        } else if ($siswa) {
            $user = Auth::user();
            $previousLoginTime = $user->last_logout_at ?? $user->last_login_at;
            $timeDifference = Carbon::now()->diffInHours(Carbon::parse($previousLoginTime));

            $user->total_login += $timeDifference;

            $user->last_login_at = Carbon::now();
            $user->last_logout_at = null; // Reset last_logout_at

            $user->save();


            return redirect()->route('dashboard');
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {

        $user = Auth::user();

        $user->last_logout_at = now();
        $previousLoginTime = $user->total_login ?? now();

        $timeDifference = Carbon::now()->diffInHours(Carbon::parse($previousLoginTime));

        $user->total_login += $timeDifference / 1000 / 60 - 1;

        $user->save();




        Auth::guard('web')->logout();



        $request->session()->invalidate();

        $request->session()->regenerateToken();



        return redirect('/');
    }
}
