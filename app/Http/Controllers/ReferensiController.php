<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Referensi;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\File;

class ReferensiController extends Controller
{
    public function index_siswa()
    {
        $referensi = Referensi::all();

        return 'views';
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
            $cover->move(storage_path('app/public/referensi/cover' . $coverName));
            $referensi->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi/file' . $fileName));
            $referensi->file = $fileName;
        }
        // Save data to Database
        $referensi->save();

        return redirect()->route('referensi-guru')->with('success', 'Data Tutorial Behasil Ditambahkan');
    }

    public function edit($id)
    {
        $referensi = Referensi::where('id', $id)->first();

        return Inertia::render('Guru/TambahReferensiGuru', [
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
            $cover->move(storage_path('app/public/referensi/cover' . $coverName));
            $referensi->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/referensi/file' . $fileName));
            $referensi->file = $fileName;
        }

        $referensi->save();

        return redirect()->route('referensi-guru')->with('success', 'Data referensi Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $referensi = Referensi::find($id);
        $destination = storage_path('app/public/referensi/cover' . $referensi->cover);
        if (File::exists($destination)) {
            File::delete($destination);
        }
        $referensi->delete();

        return redirect()->route('referensi')->with('success', 'Data referensi Berhasil Dihapus');
    }
}
