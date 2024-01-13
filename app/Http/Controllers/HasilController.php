<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hasil;

class HasilController extends Controller
{
    public function index()
    {
        $hasil = Hasil::all();

        return Inertia::render('Guru/HasilTugasSiswaGuru', [
            'hasil' => $hasil
        ]);
    }

    public function show($id)
    {
        $hasil = Hasil::where('id', $id)->get();

        return Inertia::render('hasil', [
            'hasil' => $hasil
        ]);
    }

    public function destroy($id)
    {
        $hasil = Hasil::find($id)->first();
        $hasil->delete();

        return redirect()->route('hasil');
    }
}
