<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use Inertia\Inertia;



class DashboardController extends Controller
{
    public function index_siswa()
    {

        return Inertia::render('Siswa/DashboardSiswa', []);
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
