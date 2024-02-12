<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SubMateri;
use Illuminate\Support\Facades\Storage;
use App\Models\Materi;

class SubMateriController extends Controller
{
    public function index()
    {
        $subMateri = SubMateri::with('materi')->get();

        return Inertia::render('Guru/Materi/SubmateriGuru', [
            'subMateri' => $subMateri
        ]);
    }

    public function create()
    {
        $materi = Materi::all();

        return Inertia::render('Guru/Materi/TambahSubmateriGuru', [
            'materi' => $materi
        ]);
    }

    public function store(Request $request)
    {
        $subMateri = new SubMateri();
        $subMateri->materi_id = $request->materi_id;
        $subMateri->nama = $request->nama;
        $subMateri->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/subMateri/cover/'), $coverName);
            $subMateri->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/subMateri/file/'), $fileName);
            $subMateri->file = $fileName;
        }
        $subMateri->save();

        return redirect()->route('submateri-guru');
    }

    public function edit($id)
    {
        $subMateri = SubMateri::where('id', $id)->first();

        return Inertia::render('Guru/Materi/EditSubmateriGuru', [
            'edit' => $subMateri
        ]);
    }

    public function update(Request $request)
    {
        $subMateri = SubMateri::find($request->id);
        $subMateri->materi_id = $request->materi_id;
        $subMateri->nama = $request->nama;
        $subMateri->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/subMateri/cover/'), $coverName);
            $subMateri->cover = $coverName;
        }

        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/subMateri/file/'), $fileName);
            $subMateri->file = $fileName;
        }
        $subMateri->save();

        return redirect()->route('submateri-guru');
    }

    public function destroy($id)
    {
        $subMateri = SubMateri::find($id)->get();

        if (Storage::exists('public/subMateri/cover/' . $subMateri->cover)) {
            Storage::delete('public/subMateri/cover/' . $subMateri->cover);
        }
        if (Storage::exists('public/subMateri/file/' . $subMateri->file)) {
            Storage::exists('public/subMateri/file/' . $subMateri->file);
        }

        $subMateri->delete();
        return redirect()->route('submateri-guru');
    }
}
