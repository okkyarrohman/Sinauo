<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Tugas;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\File;

class TugasController extends Controller
{
    // Untuk Guru
    public function index()
    {
        $tugas = Tugas::all();

        return Inertia::render('Guru/TugasGuru', [
            'tugas' => $tugas,
        ]);
    }

    public function create()
    {
        return Inertia::render('Guru/TambahTugasGuru');
    }

    public function store(Request $request)
    {
        $tugas = new Tugas();
        $tugas->nama = $request->nama;
        $tugas->tenggat = $request->tenggat;

        $tugas->step1 = $request->step1;
        $tugas->deskripsi1 = $request->deskripsi1;

        $tugas->step2 = $request->step2;
        $tugas->deskripsi2 = $request->deskripsi2;

        $tugas->step3 = $request->step3;
        $tugas->deskripsi3 = $request->deskripsi3;

        $tugas->step4 = $request->step4;
        $tugas->deskripsi4 = $request->deskripsi4;

        $tugas->save();

        return redirect()->route('tugas-guru')->with('success', 'Data Tugas Berhasil Ditambahkan');
    }

    public function edit($id)
    {
        $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Guru/EditTugasGuru', [
            'tugas' => $tugas
        ]);
    }

    public function update(Request $request)
    {

        $tugas = Tugas::find($request->id);
        $tugas->nama = $request->nama;
        $tugas->tenggat = $request->tenggat;

        $tugas->step1 = $request->step1;
        $tugas->deskripsi1 = $request->deskripsi1;

        $tugas->step2 = $request->step2;
        $tugas->deskripsi2 = $request->deskripsi2;

        $tugas->step3 = $request->step3;
        $tugas->deskripsi3 = $request->deskripsi3;

        $tugas->step4 = $request->step4;
        $tugas->deskripsi4 = $request->deskripsi4;

        $tugas->save();

        return redirect()->route('tugas-guru')->with('success', 'Data Tugas Berhasil Di Update');
    }

    public function destroy($id)
    {
        $tugas = Tugas::find($id)->get();

        $answer2 = storage_path('app/public/tugas/answer2' . $tugas->answer2);
        $answer3 = storage_path('app/public/tugas/answer3' . $tugas->answer3);
        $answer4 = storage_path('app/public/tugas/answer4' . $tugas->answer4);

        if (File::exists($answer2)) {
            File::delete($answer2);
        }
        if (File::exists($answer3)) {
            File::delete($answer3);
        }
        if (File::exists($answer4)) {
            File::delete($answer4);
        }

        $tugas->delete();

        return redirect()->route('Guru/TugasGuru')->with('success', 'Tugas Berhasil Dihapus');
    }


    public function hasilTugas()
    {
        $tugas = Tugas::all();

        return Inertia::render('Guru/HasilTugasSiswaGuru', [
            'tugas' => $tugas
        ]);
    }

    public function detailTugas($id)
    {
        $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Guru/DetailHasilTugasSiswaGuru', [
            'tugas' =>  $tugas
        ]);
    }
    // End Untuk Guru


    // Untuk Siswa
    public function edit_answer($id)
    {
        $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Siswa/EditTugas', [
            'tugas' => $tugas
        ]);
    }

    public function update_answer(Request $request)
    {
        $tugas = Tugas::find($request->id);
        $tugas->answer1 = $request->answer1;

        // Request column input type file
        if ($request->hasFile('answer2')) {
            $answer2 = $request->file('answer2');
            $extension = $answer2->getClientOriginalName();
            $answer2Name = date('YmdHis') . "." . $extension;
            $answer2->move(storage_path('app/public/tugas/answer2' . $answer2Name));
            $tugas->answer2 = $answer2Name;
        }

        // Request column input type file
        if ($request->hasFile('answer3')) {
            $answer3 = $request->file('answer3');
            $extension = $answer3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer3->move(storage_path('app/public/tugas/answer3' . $answer3Name));
            $tugas->answer3 = $answer3Name;
        }

        // Request column input type file
        if ($request->hasFile('answer4')) {
            $answer4 = $request->file('answer4');
            $extension = $answer4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer4->move(storage_path('app/public/tugas/answer4' . $answer4Name));
            $tugas->answer4 = $answer4Name;
        }

        $tugas->save();

        return redirect()->route('tugas')->with('success', 'Berhasil Mengirim Jawaban Tugas');
    }
}
