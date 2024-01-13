<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Opsi;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use App\Models\Soal;

class OpsiController extends Controller
{
    public function index()
    {
        $opsi = Opsi::with('soal')->get();

        return Inertia::render('Guru/Kuis/OpsiKuis', [
            'opsi' => $opsi
        ]);
    }

    public function create()
    {
        $soal = Soal::all();

        return Inertia::render('Guru/Kuis/TambahOpsiKuis', [
            'soal' => $soal
        ]);
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
        $opsi  = Opsi::where('id',$id)->with('soal')->first();

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
        return redirect()->route('opsi');
    }

    public function destroy($id)
    {
        $opsi  = Opsi::find($id);
        $opsi->delete();

        return redirect()->route('opsi');
    }
}
