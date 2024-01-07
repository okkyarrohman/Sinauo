<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKuis;
use Inertia\Inertia;

class KategoriKuisController extends Controller
{
    public function index()
    {
        $kategori = KategoriKuis::all();

        return Inertia::render('Guru/KategoriKuis', [
            'kategori' => $kategori
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/TambahKategoriKuis');
    }

    public function store(Request $request)
    {
        $kategori = new KategoriKuis();
        $kategori->name = $request->name;
        $kategori->tenggat = $request->tenggat;
        $kategori->waktu = $request->waktu;
        $kategori->save();

        return redirect()->route('kategori');
    }

    public function edit($id)
    {
        $kategori  = KategoriKuis::find($id)->first();

        return Inertia::render('Guru/EditKategoriKuis', [
            'kategori' => $kategori,
        ]);
    }

    public function update(Request $request)
    {
        $kategori = KategoriKuis::find($request->id);
        $kategori->name = $request->name;
        $kategori->tenggat = $request->tenggat;
        $kategori->waktu = $request->waktu;
        $kategori->save();

        return redirect()->route('kategori');
    }

    public function destroy($id)
    {
        $kategori  = KategoriKuis::find($id)->first();
        $kategori->delete();

        return redirect()->route('kategori');
    }
}
