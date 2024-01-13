<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Materi;
use Illuminate\Support\Facades\Storage;
use App\Models\SubMateri;


class MateriController extends Controller
{

    public function index()
    {
        $materi = Materi::all();

        return Inertia::render('Guru/Materi/MateriGuru', [
            'materi' => $materi
        ]);
    }

    public function create()
    {

        return Inertia::render('Guru/Materi/TambahMateriGuru');
    }

    public function store(Request $request)
    {
        $materi = new Materi();
        $materi->nama = $request->nama;
        $materi->jumlah = $request->jumlah;
        $materi->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/materi/cover/'), $coverName);
            $materi->cover = $coverName;
        }

        $materi->save();

        return redirect()->route('materi-guru')->with('success', 'Materi Berhasil Ditambahkan');
    }

    public function edit($id)
    {
        $materi = Materi::where('id', $id)->first();

        return Inertia::render('Guru/Materi/EditMateriGuru', [
            'materi' => $materi
        ]);
    }

    public function update(Request $request)
    {
        $materi = Materi::find($request->id);
        $materi->nama = $request->nama;
        $materi->jumlah = $request->jumlah;
        $materi->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/materi/cover/'), $coverName);
            $materi->cover = $coverName;
        }

        $materi->save();
        return redirect()->route('materi-guru')->with('success', 'Materi Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $materi = Materi::find($id);

        if (Storage::exists('public/materi/cover/' . $materi->cover)) {
            Storage::delete('public/materi/cover/' . $materi->cover);
        }
        $materi->delete();
        return redirect()->route('materi-guru')->with('success', 'Materi Berhasil Dihapus');
    }


    public function index_siswa()
    {
        $materi = Materi::all();
        $materi_submateri = Materi::with('submateri')->get();
        // $submateri = Submateri::all();
        $submateri = SubMateri::with('materi')->get();

        return Inertia::render('Siswa/MateriSiswa', [
            'materi' => $materi_submateri,
            'submaterial' => $submateri
        ]);
    }

    public function show_siswa($id)
    {
        $materi = Submateri::where('materi_id', $id)->get();

        return Inertia::render('Siswa/DetailMateriSiswa', [
            'materi' => $materi
        ]);
    }

    public function lihat_materi_siswa($id)
    {
        $submateri = Submateri::where('id', $id)->get();

        return Inertia::render('Siswa/ViewIsiMateriSiswa', [
            'submateri' => $submateri
        ]);
    }

    public function update_selesai_siswa(Request $request)
    {
        $submateri = SubMateri::find($request->id);
        $submateri->status = $request->status;

        $submateri->save();

        return redirect()->route('lihat-materi', $submateri->id)->with('success', 'Submateri selesai dipelajari');
    }
}
