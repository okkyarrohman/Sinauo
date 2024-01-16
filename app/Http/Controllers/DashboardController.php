<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Absensi;
use App\Models\KategoriKuis;
use Inertia\Inertia;
use App\Models\Tugas;
use App\Models\TugasResult;
use Carbon\Carbon;
use App\Models\Hasil;
use App\Models\SubMateri;
use App\Models\Materi;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


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

        // $tugas = TugasResult::latest()->take(3)->get();
        $tugas = TugasResult::with('tugas')->latest()->take(3)->get();



        return Inertia::render('Siswa/DashboardSiswa', [
            // 'formatDate' => $formatDate,
            'barcode' => $barcode,
            'tugasBaru' => $tugasBaru,
            'tugasResult' => $tugas,
            'chartKuis' => $this->grafikKuis(),
            'chartMateri' => $this->grafikMateri()
        ]);
    }

    public function index()
    {

        return Inertia::render('Guru/DashboardGuru', [
            'barMateri' => $this->barMateriGuru(),
        ]);
    }


    public function store_absensi(Request $request)
    {
        $absensi = new Absensi();
        $absensi->link = $request->link;


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


    private function grafikKuis()
    {
        $data = array();
        $kuis = KategoriKuis::all();
        $user = auth()->user()->id;

        foreach ($kuis as $item) {
            $data[] = [
                'kategori' => $item->kuis,
                'y' => Hasil::where('user_id', $user)->get('total_points')
            ];
        }
        return $data;
    }

    private function grafikMateri()
    {

        $submateri = Materi::latest()->take(4)->with('submateri')->get();

        // Mendapatkan Nama Materi dari Submateri
        return $submateri;
    }

    private function barMateriGuru()
    {
        $siswa = User::with('submateri')->get();

        return $siswa;
    }

    private function barTugasGuru()
    {
        $tugas = Tugas::with('tugasResult')->get();

        return $tugas;
    }
}
