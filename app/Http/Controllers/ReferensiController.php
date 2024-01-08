<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Referensi;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;

class ReferensiController extends Controller
{
    public function index_siswa()
    {
        $referensi = Referensi::all();

        return Inertia::render('Siswa/ReferensiSiswa', [
            'referensi' => $referensi
        ]);
    }

    public function read_siswa()
    {
        $referensi = Referensi::where('id')->first();

        return Inertia::render('Siswa/ViewIsiReferensiSiswa', [
            'referensi' => $referensi
        ]);
    }

    public function index()
    {
        $referensi = Referensi::all();

        return Inertia::render('Guru/ReferensiGuru', [
            'referensis' => $referensi
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/TambahReferensiGuru');
    }

    public function store(Request $request)
    {
        // Inisiasi table datanase
        $referensi = new Referensi();

        // Request column input type text
        $referensi->judul = $request->judul;
        $referensi->sumber = $request->sumber;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/referensi/cover/'), $coverName);
            $referensi->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi/file/'), $fileName);
            $referensi->file = $fileName;
        }
        // Save data to Database
        $referensi->save();

        return redirect()->route('referensi-guru')->with('success', 'Data Tutorial Behasil Ditambahkan');
    }

    public function edit($id)
    {
        $referensi = Referensi::where('id', $id)->first();

        return Inertia::render('Guru/EditReferensiGuru', [
            'referensis' => $referensi,
        ]);
    }

    public function update(Request $request)
    {
        $referensi = Referensi::find($request->id);
        $referensi->judul = $request->judul;
        $referensi->sumber = $request->sumber;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/referensi/cover/'), $coverName);
            $referensi->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi/file/'), $fileName);
            $referensi->file = $fileName;
        }

        $referensi->save();

        return redirect()->route('referensi-guru')->with('success', 'Data referensi Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $referensi = Referensi::find($id);
        $cover = Storage::exists('public/referensi/cover/' . $referensi->cover);
        $file = Storage::exists('public/referensi/file/' . $referensi->file);

        if ($cover) {
            Storage::delete('public/referensi/cover/' . $referensi->cover);
        }
        if ($file) {
            Storage::delete('public/referensi/file/' . $referensi->file);
        }

        $referensi->delete();

        return redirect()->route('referensi-guru')->with('success', 'Data referensi Berhasil Dihapus');
    }
}
