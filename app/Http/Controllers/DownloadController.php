<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Materi;
use App\Models\SubMateri;
use App\Models\Referensi;

class DownloadController extends Controller
{
    // Materi
    public function submateri_file($id)
    {
        $submateri = SubMateri::where('id', $id)->first();

        $path = public_path('storage/submateri/file/' . $submateri->file);

        return response()->download($path);
    }

    public function referensi_file($id)
    {
        $referensi = Referensi::where('id', $id)->first();
        $path = public_path('storage/referensi/file/' . $referensi->file);
        return response()->download($path);
    }
}
