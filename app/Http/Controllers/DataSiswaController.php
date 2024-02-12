<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class DataSiswaController extends Controller
{
    public function index()
    {
        $siswa = User::all();

        return Inertia::render('Guru/DataSiswaGuru', [
            'siswa' => $siswa
        ]);
    }

    public function read($id)
    {
        $siswa = User::where('id', $id)->first();

        return Inertia::render('Guru/DetailDataSiswaGuru', [
            'siswa' => $siswa
        ]);
    }

    public function edit($id)
    {
        $siswa = User::where('id', $id)->first();


        return Inertia::render('Guru/TambahSiswaGuru', [
            'siswa' => $siswa
        ]);
    }

    public function update(Request $request)
    {
        $siswa = User::find($request->id);

        $siswa->name = $request->name;
        $siswa->email = $request->email;
        $siswa->password = Hash::make($request['password']);
        // dd($siswa);

        $siswa->save();

        return redirect()->route('data-siswa')->with('success', 'Data Siswa Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $siswa = User::find($id)->get();

        $siswa->delete();

        return redirect()->route('data-siswa')->with('success', 'Data Siswa Berhasil Dihapus');
    }
}
