<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Guest/Landing', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard-siswa', function () {
//     return Inertia::render('Siswa/DashboardSiswa');
// })->middleware(['auth', 'verified'])->name('dashboard-siswa');

// GURU

// Dashboard Guru
Route::get('/dashboard-guru', function () {
    return Inertia::render('Guru/DashboardGuru');
})->middleware(['auth', 'verified'])->name('dashboard-guru');

Route::get('/materi-guru', function () {
    return Inertia::render('Guru/MateriGuru');
})->middleware(['auth', 'verified'])->name('materi-guru');

Route::get('/materi-guru/tambah-materi', function () {
    return Inertia::render('Guru/TambahMateriGuru');
})->middleware(['auth', 'verified'])->name('tambah-materi');

Route::get('/materi-guru/tambah-submateri', function () {
    return Inertia::render('Guru/TambahKontenMateriGuru');
})->middleware(['auth', 'verified'])->name('tambah-submateri');

Route::get('/tutorial-guru', function () {
    return Inertia::render('Guru/TutorialGuru');
})->middleware(['auth', 'verified'])->name('tutorial-guru');

Route::get('/tutorial-guru/tambah-tutorial', function () {
    return Inertia::render('Guru/TambahTutorialGuru');
})->middleware(['auth', 'verified'])->name('tambah-tutorial');

Route::get('/referensi-guru', function () {
    return Inertia::render('Guru/ReferensiGuru');
})->middleware(['auth', 'verified'])->name('referensi-guru');

Route::get('/referensi-guru/tambah-referensi', function () {
    return Inertia::render('Guru/TambahReferensiGuru');
})->middleware(['auth', 'verified'])->name('tambah-referensi');

Route::get('/kuis-guru', function () {
    return Inertia::render('Guru/KuisGuru');
})->middleware(['auth', 'verified'])->name('kuis-guru');

Route::get('/kuis-guru/tambah-kuis', function () {
    return Inertia::render('Guru/TambahKuisGuru');
})->middleware(['auth', 'verified'])->name('tambah-kuis');

Route::get('/kuis-guru/hasil-kuis', function () {
    return Inertia::render('Guru/HasilKuisGuru');
})->middleware(['auth', 'verified'])->name('hasil-kuis');

Route::get('/tugas-guru', function () {
    return Inertia::render('Guru/TugasGuru');
})->middleware(['auth', 'verified'])->name('tugas-guru');

Route::get('/tugas-guru/tambah-tugas', function () {
    return Inertia::render('Guru/TambahTugasGuru');
})->middleware(['auth', 'verified'])->name('tambah-tugas');

Route::get('/tugas-guru/hasil-tugas', function () {
    return Inertia::render('Guru/HasilTugasSiswaGuru');
})->middleware(['auth', 'verified'])->name('hasil-tugas');

Route::get('/tugas-guru/detail-tugas-siswa', function () {
    return Inertia::render('Guru/DetailHasilTugasSiswaGuru');
})->middleware(['auth', 'verified'])->name('detail-tugas-siswa');

// Data Siswa
Route::get('/data-siswa', function () {
    return Inertia::render('Guru/DataSiswaGuru');
})->middleware(['auth', 'verified'])->name('data-siswa');

Route::get('/data-siswa/detail-siswa', function () {
    return Inertia::render('Guru/DetailDataSiswaGuru');
})->middleware(['auth', 'verified'])->name('detail-siswa');

Route::get('/data-siswa/edit-siswa', function () {
    return Inertia::render('Guru/TambahSiswaGuru');
})->middleware(['auth', 'verified'])->name('edit-siswa');





// SISWA

// Materi
Route::get('/materi', function () {
    return Inertia::render('Siswa/MateriSiswa');
})->middleware(['auth', 'verified'])->name('materi');

Route::get('/materi/detail-materi', function () {
    return Inertia::render('Siswa/DetailMateriSiswa');
})->middleware(['auth', 'verified'])->name('detail-materi');

Route::get('/materi/detail-materi/lihat-materi', function () {
    return Inertia::render('Siswa/ViewIsiMateriSiswa');
})->middleware(['auth', 'verified'])->name('lihat-materi');

// Tutorial
Route::get('/tutorial', function () {
    return Inertia::render('Siswa/TutorialSiswa');
})->middleware(['auth', 'verified'])->name('tutorial');

// Referensi
Route::get('/referensi', function () {
    return Inertia::render('Siswa/ReferensiSiswa');
})->middleware(['auth', 'verified'])->name('referensi');

Route::get('/referensi/lihat-referensi', function () {
    return Inertia::render('Siswa/ViewIsiReferensiSiswa');
})->middleware(['auth', 'verified'])->name('lihat-referensi');

// Kuis
Route::get('/kuis', function () {
    return Inertia::render('Siswa/KuisSiswa');
})->middleware(['auth', 'verified'])->name('kuis');

Route::get('/kuis/mulai-kuis', function () {
    return Inertia::render('Siswa/MulaiKuisSiswa');
})->middleware(['auth', 'verified'])->name('mulai-kuis');

Route::get('/kuis/soal-kuis', function () {
    return Inertia::render('Siswa/SoalKuisSiswa');
})->middleware(['auth', 'verified'])->name('soal-kuis');

// Tugas
Route::get('/tugas', function () {
    return Inertia::render('Siswa/TugasSiswa');
})->middleware(['auth', 'verified'])->name('tugas');

Route::get('/tugas/detail-tugas', function () {
    return Inertia::render('Siswa/DetailTugasSiswa');
})->middleware(['auth', 'verified'])->name('detail-tugas');

// Panduan
Route::get('/panduan', function () {
    return Inertia::render('Siswa/PanduanSiswa');
})->middleware(['auth', 'verified'])->name('panduan');

// Route::get('/edit-profil', function () {
//     return Inertia::render('Siswa/EditProfilSiswa');
// })->middleware(['auth', 'verified'])->name('edit-profil');

Route::get('/dashboard', function () {
    return Inertia::render('Siswa/DashboardSiswa');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/edit-profil', [ProfileController::class, 'edit'])->name('edit-profil.edit');
    Route::patch('/edit-profil', [ProfileController::class, 'update'])->name('edit-profil.update');
    Route::delete('/edit-profil', [ProfileController::class, 'destroy'])->name('edit-profil.destroy');
});

require __DIR__.'/auth.php';


// Route::get('/testing', function(){
//     return Inertia::render('Testing',[
//         'title' => 'Laravel with react'
//     ]);
// });