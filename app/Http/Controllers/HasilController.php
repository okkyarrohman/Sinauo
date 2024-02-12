<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hasil;
use App\Models\Soal;

class HasilController extends Controller
{
    public function index()
    {
        // $hasil = Hasil::with('user')->get();
        $soal = Hasil::with(['soal','user'])->get();
        // $kategori = Soal::with('kategori')->get();

        return Inertia::render('Guru/Kuis/HasilKuis', [
            // 'hasil' => $hasil,
            'soal' => $soal,
            // 'kategori' => $kategori
        ]);
    }

    public function show($id)
    {
        $hasil = Hasil::with('soal')->where('id', $id)->get();

        return Inertia::render('Guru/Kuis/DetailHasilKuis', [
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
