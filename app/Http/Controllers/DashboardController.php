<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use Inertia\Inertia;
use App\Models\Tugas;
use Carbon\Carbon;



class DashboardController extends Controller
{
    public function index_siswa()
    {
        // Mendapatkan Barcode Terbaru
        $barcode = Absensi::latest()->first();

        // Mendapatkan Tanggal Barcode sesuai Tahun-Bulan-Hari
        // $formatDate = Carbon::parse($barcode->created_at)->format('Y-m-d');


        // Mendapat 3 tugas Terbaru
        $tugasBaru = Tugas::latest()->take(3)->get();

        return Inertia::render('Siswa/DashboardSiswa', [
            // 'formatDate' => $formatDate,
            'barcode' => $barcode,
            'tugasBaru' => $tugasBaru,
        ]);
    }

    public function index()
    {




        return Inertia::render('Guru/DashboardGuru');
    }


    public function store_absensi(Request $request)
    {
        $absensi = new Absensi();

        // Request column input type file
        if ($request->hasFile('barcode')) {
            $barcode = $request->file('barcode');
            $extension = $barcode->getClientOriginalName();
            $barcodeName = date('YmdHis') . "." . $extension;
            $barcode->move(storage_path('app/public/absensi/barcode/'), $barcodeName);
            $absensi->barcode = $barcodeName;
        }

        $absensi->save();

        return redirect()->route('dashboard-guru')->with('success', 'Absen Barcode berhasil diperbarui');
    }
}
