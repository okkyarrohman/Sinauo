<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Opsi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class OpsiController extends Controller
{
    public function index()
    {
        $opsi = Opsi::all();

        return Inertia::render('Guru/Kuis/OpsiKuis', [
            'opsi' => $opsi
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/Kuis/TambahOpsiKuis');
    }

    public function store(Request $request)
    {
        $opsi = new Opsi();
        $opsi->soal_id = $request->soal_id;
        $opsi->opsi = $request->opsi;
        $opsi->point = $request->point;

        $opsi->save();

        return redirect()->route('opsi');
    }

    public function edit($id)
    {
        $opsi  = Opsi::find($id)->first();

        return Inertia::render('Guru/Kuis/EditOpsiKuis', [
            'opsi' => $opsi,
        ]);
    }

    public function update(Request $request)
    {
        $opsi = Opsi::find($request->id);
        $opsi->soal_id = $request->soal_id;
        $opsi->opsi = $request->opsi;
        $opsi->point = $request->point;

        $opsi->save();
        return redirect()->route('soal');
    }

    public function destroy($id)
    {
        $opsi  = Opsi::find($id)->first();
        $opsi->delete();

        return redirect()->route('soal');
    }
}
