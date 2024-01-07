<?php

use App\Http\Controllers\DataSiswaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferensiController;
use App\Http\Controllers\TugasController;
use App\Http\Controllers\TugasResultController;
use App\Http\Controllers\TutorialController;
use App\Models\User;
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

Route::get('/', function (User $user) {
    return Inertia::render('Guest/Landing', [
        'siswa' => $user->hasRole('siswa'),
        'guru' => $user->hasRole('guru'),
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
Route::group(['middleware' => 'role:guru'], function () {
    Route::get('/dashboard-guru', function () {
        return Inertia::render('Guru/DashboardGuru');
    })->name('dashboard-guru');

    Route::get('/materi-guru', function () {
        return Inertia::render('Guru/MateriGuru');
    })->name('materi-guru');

    Route::get('/materi-guru/tambah-materi', function () {
        return Inertia::render('Guru/TambahMateriGuru');
    })->name('create.materi');

    Route::get('/materi-guru/tambah-submateri', function () {
        return Inertia::render('Guru/TambahKontenMateriGuru');
    })->name('tambah-submateri');


    Route::controller(TutorialController::class)->group(function () {
        Route::get('/tutorial-guru', 'index')->name('tutorial-guru');
        Route::get('/tutorial-guru/tambah-tutorial', 'create')->name('create.tutorial');
        Route::post('/tutorial-guru/tambah-tutorial', 'store')->name('store.tutorial');
        Route::get('/tutorial-guru/edit-tutorial/{id}', 'edit')->name('edit.tutorial');
        Route::post('/tutorial-guru/update-tutorial', 'update')->name('update.tutorial');
        Route::get('/tutorial-guru/destroy-tutorial/{id}', 'destroy')->name('destroy.tutorial');
    });

    Route::controller(ReferensiController::class)->group(function () {
        Route::get('/referensi-guru', 'index')->name('referensi-guru');
        Route::get('/referensi-guru/tambah-referensi', 'create')->name('create.referensi');
        Route::post('/referensi-guru/tambah-referensi', 'store')->name('store.referensi');
        Route::get('/referensi-guru/edit-referensi/{id}', 'edit')->name('edit.referensi');
        Route::post('/referensi-guru/update-referensi', 'update')->name('update.referensi');
        Route::get('/referensi-guru/destroy-referensi/{id}', 'destroy')->name('destroy.referensi');
    });

    Route::controller(TugasController::class)->group(function () {
        Route::get('/tugas-guru', 'index')->name('tugas-guru');
        Route::get('/tugas-guru/tambah-tugas', 'create')->name('create.tugas');
        Route::post('/tugas-guru/tambah-tugas', 'store')->name('store.tugas');
        Route::get('/tugas-guru/eddeit-tugas/{id}', 'edit')->name('edit.tugas');
        Route::post('/tugas-guru/update-tugas', 'update')->name('update.tugas');
        Route::get('/tugas-guru/destroy-tugas/{id}', 'destroy')->name('destroy.tugas');
    });

    Route::controller(TugasResultController::class)->group(function () {
        Route::get('/tugas-guru/hasil-tugas/{id}', 'hasilTugas')->name('hasil-tugas');
        Route::get('/tugas-guru/detail-tugas-siswa/{id}', 'detailTugas')->name('detail-tugas-siswa');
        Route::post('/tugas-guru/detail-tugas-siswa', 'updateFeedback')->name('updateFeedback.tugas');
    });

    Route::controller(DataSiswaController::class)->group(function () {
        Route::get('/data-siswa', 'index')->name('data-siswa');
        Route::get('/data-siswa/detail-siswa/{id}', 'read')->name('read.siswa');
        Route::get('/data-siswa/edit-siswa/{id}', 'edit')->name('edit.siswa');
        Route::post('/data-siswa/edit-siswa/', 'update')->name('update.siswa');
        Route::get('/data-siswa/{id}', 'destroy')->name('destroy.siswa');
    });






    Route::get('/kuis-guru', function () {
        return Inertia::render('Guru/KuisGuru');
    })->name('kuis-guru');

    Route::get('/kuis-guru/tambah-kuis', function () {
        return Inertia::render('Guru/TambahKuisGuru');
    })->name('create.kuis');

    Route::get('/kuis-guru/hasil-kuis', function () {
        return Inertia::render('Guru/HasilKuisGuru');
    })->name('hasil-kuis');
});



Route::group(['middleware' => 'role:siswa'], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Siswa/DashboardSiswa');
    })->name('dashboard');
    // Materi
    Route::get('/materi', function () {
        return Inertia::render('Siswa/MateriSiswa');
    })->name('materi');

    Route::get('/materi/detail-materi', function () {
        return Inertia::render('Siswa/DetailMateriSiswa');
    })->name('detail-materi');

    Route::get('/materi/detail-materi/lihat-materi', function () {
        return Inertia::render('Siswa/ViewIsiMateriSiswa');
    })->name('lihat-materi');

    // Tutorial
    Route::controller(TutorialController::class)->group(function () {
        Route::get('/tutorial', 'index_siswa')->name('tutorial');
    });


    // Referensi
    Route::controller(ReferensiController::class)->group(function () {
        Route::get('/referensi', 'index_siswa')->name('referensi');
        Route::get('/referensi/lihat-referensi/', 'read_siswa')->name('lihat-referensi');
    });

    // Kuis
    Route::get('/kuis', function () {
        return Inertia::render('Siswa/KuisSiswa');
    })->name('kuis');

    Route::get('/kuis/mulai-kuis', function () {
        return Inertia::render('Siswa/MulaiKuisSiswa');
    })->name('mulai-kuis');

    Route::get('/kuis/soal-kuis', function () {
        return Inertia::render('Siswa/SoalKuisSiswa');
    })->name('soal-kuis');

    // Tugas
    Route::controller(TugasResultController::class)->group(function () {
        Route::get('/tugas', 'index_siswa')->name('tugas');
        Route::get('/tugas/detail-tugas/{id}', 'edit_answer')->name('detail-tugas');
        Route::post('/tugas/detail-tugas', 'update_answer')->name('update-tugas');
    });



    // Panduan
    Route::get('/panduan', function () {
        return Inertia::render('Siswa/PanduanSiswa');
    })->name('panduan');
});
// SISWA

Route::middleware('auth')->group(function () {
    Route::get('/edit-profil', [ProfileController::class, 'edit'])->name('edit-profil.edit');
    Route::patch('/edit-profil', [ProfileController::class, 'update'])->name('edit-profil.update');
    Route::delete('/edit-profil', [ProfileController::class, 'destroy'])->name('edit-profil.destroy');
});

require __DIR__ . '/auth.php';


// Route::get('/testing', function(){
//     return Inertia::render('Testing',[
//         'title' => 'Laravel with react'
//     ]);
// });
