<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tugas;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class TugasController extends Controller
{
    // Untuk Guru
    public function index()
    {
        $tugas = Tugas::all();

        return Inertia::render('Guru/TugasGuru', [
            'tugas' => $tugas,
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/TambahTugasGuru');
    }

    public function store(Request $request)
    {
        $tugas = new Tugas();
        $tugas->nama = $request->nama;
        $tugas->tenggat = $request->tenggat;

        $tugas->step1 = $request->step1;
        $tugas->deskripsi1 = $request->deskripsi1;

        $tugas->step2 = $request->step2;
        $tugas->deskripsi2 = $request->deskripsi2;

        $tugas->step3 = $request->step3;
        $tugas->deskripsi3 = $request->deskripsi3;

        $tugas->step4 = $request->step4;
        $tugas->deskripsi4 = $request->deskripsi4;

        $tugas->save();

        return redirect()->route('tugas-guru')->with('success', 'Data Tugas Berhasil Ditambahkan');
    }

    public function edit($id)
    {
        $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Guru/EditTugasGuru', [
            'tugas' => $tugas
        ]);
    }

    public function update(Request $request)
    {

        $tugas = Tugas::find($request->id);
        $tugas->nama = $request->nama;
        $tugas->tenggat = $request->tenggat;

        $tugas->step1 = $request->step1;
        $tugas->deskripsi1 = $request->deskripsi1;

        $tugas->step2 = $request->step2;
        $tugas->deskripsi2 = $request->deskripsi2;

        $tugas->step3 = $request->step3;
        $tugas->deskripsi3 = $request->deskripsi3;

        $tugas->step4 = $request->step4;
        $tugas->deskripsi4 = $request->deskripsi4;

        $tugas->save();

        return redirect()->route('tugas-guru')->with('success', 'Data Tugas Berhasil Di Update');
    }

    public function destroy($id)
    {
        $tugas = Tugas::find($id)->get();

        $tugas->delete();
        return redirect()->route('Guru/TugasGuru')->with('success', 'Tugas Berhasil Dihapus');
    }



    // End Untuk Guru

}
