<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKuis;
use App\Models\Opsi;
use App\Models\Hasil;
use Inertia\Inertia;

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

        return Inertia::render('Siswa/SoalKuisSiswaAll', [
            'kategori' => $categories
        ]);
    }

    public function store(Request $request)
    {
        $soalInput = $request->input('soal');

        if (is_array($soalInput)) {
            $options = Opsi::find(array_values($soalInput));


            $result = auth()->user()->hasil()->create([
                'total_points' => $options->sum('point')
            ]);

            $questions = $options->mapWithKeys(function ($option) {
                return [
                    $option->soal_id => [
                        'opsi_id' => $option->id,
                        'point' => $option->point
                    ]
                ];
            })->toArray();

            $result->soal()->sync($questions);

            return redirect()->route('kuis');
            // return Inertia::render('Siswa/KuisSiswa');
        }
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
