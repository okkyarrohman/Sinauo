<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KategoriKuis;

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
}
