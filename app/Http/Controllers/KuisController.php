<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKuis;
use App\Models\Opsi;
use App\Models\Hasil;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class KuisController extends Controller
{
    public function index()
    {
        $categories = KategoriKuis::with(['soal' => function ($query) {
            $query->inRandomOrder()
                ->with(['opsi' => function ($query) {
                    $query->inRandomOrder();
                }]);
        }])
            ->whereHas('soal')
            ->get();

        return Inertia::render('Siswa/KuisSiswa', [
            'kategori' => $categories
        ]);
    }

    public function index_mulai($id)
    {
        $categories = KategoriKuis::where('id', $id)->with(['soal' => function ($query) {
            $query->inRandomOrder()
                ->with(['opsi' => function ($query) {
                    $query->inRandomOrder();
                }]);
        }])
            ->whereHas('soal')
            ->get();

        return Inertia::render('Siswa/MulaiKuisSiswa', [
            'kategori' => $categories
        ]);
    }

    public function index_soal($id)
    {
        $categories = KategoriKuis::where('id', $id)->with(['soal' => function ($query) {
            $query->inRandomOrder()
                ->with(['opsi' => function ($query) {
                    $query->inRandomOrder();
                }]);
        }])
            ->whereHas('soal')
            ->get();

        return Inertia::render('Siswa/SoalKuisSiswa', [
            'kategori' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $opsi = Opsi::find(array_values($request->input('soal')));



        // $user = Auth::user()->hasil();
        // $kategori = $request->input('kategori_kuis_id');
        // $hasil = $user->create([
        //     'kategori_kuis_id' => $kategori,
        //     'total_points' => $opsi->sum('point'),
        // ]);


        $hasilSeluruh = new Hasil();
        $hasilSeluruh->user_id = Auth::user()->id;
        $hasilSeluruh->kategori_kuis_id = $request->kategori_kuis_id;
        $hasilSeluruh->total_points = $opsi->sum('point');
        $hasilSeluruh->save();



        $soal = $opsi->mapWithKeys(function ($option) {
            return [
                $option->soal_id => [
                    'opsi_id' => $option->id,
                    'point' => $option->point
                ],
            ];
        })->toArray();

        $hasilSeluruh->soal()->sync($soal);

        return redirect()->route('kuis');
    }


    public function show($result_id)
    {
        $result = Hasil::whereHas('user', function ($query) {
            $query->whereId(auth()->id());
        })->findOrFail($result_id);

        // return view('testing.hasilTesting', compact('result'));
        return Inertia::render('Siswa/KuisSiswa', [
            'result' => $result
        ]);
    }
}
