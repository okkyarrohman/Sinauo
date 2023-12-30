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

Route::get('/tutorial', function () {
    return Inertia::render('Siswa/TutorialSiswa');
})->middleware(['auth', 'verified'])->name('tutorial');

Route::get('/referensi', function () {
    return Inertia::render('Siswa/ReferensiSiswa');
})->middleware(['auth', 'verified'])->name('referensi');

Route::get('/kuis', function () {
    return Inertia::render('Siswa/KuisSiswa');
})->middleware(['auth', 'verified'])->name('kuis');

Route::get('/tugas', function () {
    return Inertia::render('Siswa/TugasSiswa');
})->middleware(['auth', 'verified'])->name('tugas');

Route::get('/data-siswa', function () {
    return Inertia::render('Guru/DataSiswa');
})->middleware(['auth', 'verified'])->name('data-siswa');

Route::get('/panduan', function () {
    return Inertia::render('Siswa/Panduan');
})->middleware(['auth', 'verified'])->name('panduan');

Route::get('/edit-profil', function () {
    return Inertia::render('Siswa/EditProfilSiswa');
})->middleware(['auth', 'verified'])->name('edit-profil');

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