<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tugas;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class TugasResultController extends Controller
{
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

    public function edit_answer()
    {
        // $tugas = Tugas::where('id', $id)->first();

        return Inertia::render('Siswa/DetailTugasSiswa', [
            //'tugas' => $tugas
        ]);
    }

    public function update_answer(Request $request)
    {
        $tugas = Tugas::find($request->id);
        $tugas->user()->associate(Auth::user());
        $tugas->answer1 = $request->answer1;


        // Request column input type file
        if ($request->hasFile('answer2')) {
            $answer2 = $request->file('answer2');
            $extension = $answer2->getClientOriginalName();
            $answer2Name = date('YmdHis') . "." . $extension;
            $answer2->move(storage_path('app/public/tugas/answer2/'), $answer2Name);
            $tugas->answer2 = $answer2Name;
        }

        // Request column input type file
        if ($request->hasFile('answer3')) {
            $answer3 = $request->file('answer3');
            $extension = $answer3->getClientOriginalName();
            $answer3Name = date('YmdHis') . "." . $extension;
            $answer3->move(storage_path('app/public/tugas/answer3/'), $answer3Name);
            $tugas->answer3 = $answer3Name;
        }

        // Request column input type file
        if ($request->hasFile('answer4')) {
            $answer4 = $request->file('answer4');
            $extension = $answer4->getClientOriginalName();
            $answer4Name = date('YmdHis') . "." . $extension;
            $answer4->move(storage_path('app/public/tugas/answer4/'), $answer4Name);
            $tugas->answer4 = $answer4Name;
        }

        $tugas->save();

        return redirect()->route('tugas')->with('success', 'Berhasil Mengirim Jawaban Tugas');
    }
}
