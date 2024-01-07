<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKuis;
use App\Models\Opsi;
use App\Models\Hasil;

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

        return view('testing.testing', compact('categories'));
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

            return redirect()->route('testing.testing.show', $result->id);
        }





        // $options = Opsi::find(array_values($request->input('soal')));

        // $result = auth()->user()->hasil()->create([
        //     'total_points' => $options->sum('points')
        // ]);

        // $questions = $options->mapWithKeys(function ($option) {
        //     return [
        //         $option->question_id => [
        //             'option_id' => $option->id,
        //             'points' => $option->points
        //         ]
        //     ];
        // })->toArray();

        // $result->questions()->sync($questions);

        // return redirect()->route('testing.testing.show', $result->id);
    }

    public function show($result_id)
    {
        $result = Hasil::whereHas('user', function ($query) {
            $query->whereId(auth()->id());
        })->findOrFail($result_id);

        return view('testing.hasilTesting', compact('result'));
    }
}
