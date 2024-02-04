<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TugasResult;
use App\Models\User;
use App\Models\Tugas;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;

class TugasResultController extends Controller
{

    public function hasilTugas($id)
    {
        $tugas = TugasResult::where('tugas_id', $id)->with('tugas')->get();

        $namaTugas = $tugas->map(function ($tugas) {
            return $tugas->tugas->nama;
        });

        $namaUser = $tugas->map(function ($siswa) {
            return $siswa->user->name;
        });

        return Inertia::render('Guru/HasilTugasSiswaGuru', [
            'tugas' => $tugas,
            'namaTugas' => $namaTugas,
            'namaUser' => $namaUser,
        ]);
    }

    public function detailTugas()
    {
        $tugas = TugasResult::all();

        return Inertia::render('Guru/DetailHasilTugasSiswaGuru', [
            'tugas' =>  $tugas
        ]);
    }

    public function updateFeedback(Request $request)
    {
        $tugas = TugasResult::find($request->id);

        $tugas->konfirmasi1 = $request->konfirmasi1;
        $tugas->konfirmasi2 = $request->konfirmasi2;
        $tugas->konfirmasi3 = $request->konfirmasi3;
        $tugas->konfirmasi4 = $request->konfirmasi4;
        $tugas->feedback = $request->feedback;

        $tugas->save();

        return redirect()->route('hasil-tugas', $tugas->tugas_id)->with('success', 'data berhasi dikirim');
    }

    public function konfimasi1(Request $request)
    {
        $tugas = TugasResult::find($request->id);
        $tugas->konfimasi1 = $request->konfimasi1;
        $tugas->save();
    }

    public function konfirmasi2(Request $request)
    {
        $tugas = TugasResult::find($request->id);
        $tugas->konfirmasi2 = $request->konfirmasi2;
        $tugas->save();
    }

    public function konfirmasi3(Request $request)
    {
        $tugas = TugasResult::find($request->id);
        $tugas->konfirmasi3 = $request->konfirmasi3;
        $tugas->save();
    }

    public function konfirmasi4(Request $request)
    {
        $tugas = TugasResult::find($request->id);
        $tugas->konfirmasi4 = $request->konfirmasi4;
        $tugas->save();
    }


    // Untuk Siswa
    public function index_siswa()
    {
        // $tugas = Tugas::all();
        $tugas = Tugas::with('tugasResult')->get();

        // $tugasDenganInfoHasil = Tugas::with('tugasResult')->get();

        $tugasResult = TugasResult::with('tugas')->latest()->take(3)->get();




        return Inertia::render('Siswa/TugasSiswa', [
            'tugas' => $tugas,
            // 'tugasDenganInfoHasil' => $tugasDenganInfoHasil,
            'tugasResult' => $tugasResult,
        ]);
    }

    public function edit_answer(Tugas $tugas, $id)
    {
        $user = Auth::user();


        $tugas = Tugas::where('id', $id)->first();

        $tugasResult = TugasResult::with('tugas')->where(
            [
                'tugas_id' => $id,
                'user_id' => auth()->user()->id
            ]
        )->first();

        return Inertia::render('Siswa/DetailTugasSiswa', [
            'tugas' => $tugas,
            'tugasResult' => $tugasResult

        ]);
    }

    public function store(Request $request)
    {
        $tugas = new TugasResult();
        $tugas->user_id = $request->user_id;
        $tugas->tugas_id = $request->tugas_id;
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

        $tugas->konfirmasi1 = "Belum Diterima";
        $tugas->konfirmasi2 = "Belum Diterima";
        $tugas->konfirmasi3 = "Belum Diterima";
        $tugas->konfirmasi4 = "Belum Diterima";



        $tugas->save();

        return redirect()->route('tugas')->with('success', 'Berhasil Mengirim Jawaban Tugas');
    }

    public function update(Request $request)
    {
        $tugas =  TugasResult::find($request->id);
        $tugas->user_id = $request->user_id;
        $tugas->tugas_id = $request->tugas_id;
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
