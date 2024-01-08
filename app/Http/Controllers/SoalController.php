<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Soal;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class SoalController extends Controller
{
    public function index()
    {
        $soal = Soal::all();

        return Inertia::render('Guru/Kuis/SoalKuis', [
            'soal' => $soal
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/Kuis/TambahSoalKuis');
    }

    public function store(Request $request)
    {
        $soal = new Soal();
        $soal->kategori_id = $request->kategori_id;
        $soal->soal = $request->soal;
        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('His') . "." . $extension;
            $gambar->move(storage_path('app/public/kuis/gambar/'), $gambarName);
            $soal->gambar = $gambarName;
        }
        $soal->save();

        return redirect()->route('soal');
    }

    public function edit($id)
    {
        $soal  = Soal::find($id)->first();

        return Inertia::render('Guru/Kuis/EditSoalKuis', [
            'soal' => $soal,
        ]);
    }

    public function update(Request $request)
    {
        $soal = Soal::find($request->id);
        $soal->kategori_id = $request->kategori_id;
        $soal->soal = $request->soal;
        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('His') . "." . $extension;
            $gambar->move(storage_path('app/public/kuis/gambar/'), $gambarName);
            $soal->gambar = $gambarName;
        }
        $soal->save();

        return redirect()->route('soal');
    }

    public function destroy($id)
    {
        $soal  = Soal::find($id)->first();
        if (Storage::exists('public/kuis/gambar/' . $soal->gambar)) {
            Storage::delete('public/kuis/gambar/' . $soal->gambar);
        }
        $soal->delete();

        return redirect()->route('soal');
    }
}
