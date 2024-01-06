<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tutorial;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TutorialController extends Controller
{
    public function index_siswa()
    {
        $tutorial = Tutorial::all();

        return Inertia::render('Siswa/TutorialSiswa', [
            'tutorial' => $tutorial
        ]);
    }

    public function index()
    {
        $tutorial = Tutorial::all();

        return Inertia::render('Guru/TutorialGuru', [
            'tutorials' => $tutorial
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/TambahTutorialGuru');
    }

    public function store(Request $request)
    {
        // Inisiasi table datanase
        $tutorial = new Tutorial();

        // Request column input type text
        $tutorial->judul = $request->judul;
        $tutorial->sumber = $request->sumber;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/tutorial/cover/'), $coverName);
            $tutorial->cover = $coverName;
        }
        // Save data to Database
        $tutorial->save();

        return redirect()->route('tutorial-guru')->with('success', 'Data Tutorial Behasil Ditambahkan');
    }

    public function edit($id)
    {
        $tutorial = Tutorial::where('id', $id)->first();

        return Inertia::render('Guru/EditTutorialGuru', [
            'tutorials' => $tutorial
        ]);
    }

    public function update(Request $request)
    {
        $tutorial = Tutorial::find($request->id);
        $tutorial->judul = $request->judul;
        $tutorial->sumber = $request->sumber;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('YmdHis') . "." . $extension;
            $cover->move(storage_path('app/public/tutorial/cover/'), $coverName);
            $tutorial->cover = $coverName;
        }
        $tutorial->save();

        return redirect()->route('tutorial-guru')->with('success', 'Data Tutorial Berhasil Diupdate');
    }

    public function destroy($id)
    {
        $tutorial = Tutorial::find($id);
        $cover = Storage::exists('public/tutorial/cover/' . $tutorial->cover);

        if ($cover) {
            Storage::delete('public/tutorial/cover/' . $tutorial->cover);
        }
        $tutorial->delete();
        return redirect()->route('tutorial-guru')->with('success', 'Data Tutorial Berhasil Dihapus');
    }
}
