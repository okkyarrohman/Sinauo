<?php


use App\Http\Controllers\DataSiswaController;
use App\Http\Controllers\KategoriKuisController;
use App\Http\Controllers\KuisController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferensiController;
use App\Http\Controllers\SoalController;
use App\Http\Controllers\SubMateriController;
use App\Http\Controllers\TugasController;
use App\Http\Controllers\TugasResultController;
use App\Http\Controllers\TutorialController;
use App\Http\Controllers\MateriController;
use App\Http\Controllers\OpsiController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DownloadController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HasilController;
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



Route::get('/', function (User $user) {
    return Inertia::render('Guest/Landing', [
        'siswa' => $user->hasRole('siswa'),
        'guru' => $user->hasRole('guru'),
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// GURU
Route::group(['middleware' => 'role:guru'], function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/dashboard-guru', 'index')->name('dashboard-guru');
        Route::post('/dashboard-guru', 'store_absensi')->name('store.absensi');
    });

    Route::controller(MateriController::class)->group(function () {
        Route::get('/materi-guru', 'index')->name('materi-guru');
        Route::get('/materi-guru/tambah-materi', 'create')->name('create.materi');
        Route::post('/materi-guru/tambah-materi', 'store')->name('store.materi');
        Route::get('/materi-guru/edit-materi/{id}', 'edit')->name('edit.materi');
        Route::post('/materi-guru/edit-materi/', 'update')->name('update.materi');
        Route::get('/materi-guru/destroy-materi/{id}', 'destroy')->name('destroy.materi');
    });

    Route::controller(SubMateriController::class)->group(function () {
        Route::get('/submateri-guru', 'index')->name('submateri-guru');
        Route::get('/submateri-guru/tambah-submateri', 'create')->name('create.submateri');
        Route::post('/submateri-guru/tambah-submateri', 'store')->name('store.submateri');
        Route::get('/submateri-guru/edit-submateri/{id}', 'edit')->name('edit.submateri');
        Route::post('/submateri-guru/edit-submateri/', 'update')->name('update.submateri');
        Route::get('/submateri-guru/destroy-submateri/{id}', 'destroy')->name('destroy.submateri');
    });

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

    // Quis Start FROM HERE
    Route::controller(KategoriKuisController::class)->group(function () {
        Route::get('/kategori', 'index')->name('kategori');
        Route::get('/kategori/tambah-kategori', 'create')->name('create.kategori');
        Route::post('/kategori/tambah-kategori', 'store')->name('store.kategori');
        Route::get('/kategori/edit-kategori/{id}', 'edit')->name('edit.kategori');
        Route::post('/kategori/edit-kategori', 'update')->name('update.kategori');
        Route::get('/kategori/destroy-kategori/{id}', 'destroy')->name('destroy.kategori');
    });

    Route::controller(SoalController::class)->group(function () {
        Route::get('/soal', 'index')->name('soal');
        Route::get('/soal/tambah-soal', 'create')->name('create.soal');
        Route::post('/soal/tambah-soal', 'store')->name('store.soal');
        Route::get('/soal/edit-soal/{id}', 'edit')->name('edit.soal');
        Route::post('/soal/edit-soal', 'update')->name('update.soal');
        Route::get('/soal/destroy-soal/{id}', 'destroy')->name('destroy.soal');
    });

    Route::controller(OpsiController::class)->group(function () {
        Route::get('/opsi', 'index')->name('opsi');
        Route::get('/opsi/tambah-opsi', 'create')->name('create.opsi');
        Route::post('/opsi/tambah-opsi', 'store')->name('store.opsi');
        Route::get('/opsi/edit-opsi/{id}', 'edit')->name('edit.opsi');
        Route::post('/opsi/edit-opsi', 'update')->name('update.opsi');
        Route::get('/opsi/destroy-opsi/{id}', 'destroy')->name('destroy.opsi');
    });

    Route::controller(HasilController::class)->group(function () {
        Route::get('/hasil', 'index')->name('hasil');
        Route::get('/hasil/show/{id}', 'show')->name('show.hasil');
        Route::get('/hasil/destroy/{id}', 'destroy')->name('destroy.hasil');
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


// Route Siswa
Route::group(['middleware' => 'role:siswa'], function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/dashboard', 'index_siswa')->name('dashboard');
    });

    // Materi
    Route::controller(MateriController::class)->group(function () {
        Route::get('/materi', 'index_siswa')->name('materi');
        Route::get('/materi/detail-materi/{id}', 'show_siswa')->name('detail-materi');
        Route::get('/materi/detail-materi/lihat-materi/{id}', 'lihat_materi_siswa')->name('lihat-materi');
        Route::post('/materi/detail-materi/lihat-materi', 'update_selesai_siswa')->name('update.submateri');
    });


    // Tutorial
    Route::controller(TutorialController::class)->group(function () {
        Route::get('/tutorial', 'index_siswa')->name('tutorial');
    });

    // Referensi
    Route::controller(ReferensiController::class)->group(function () {
        Route::get('/referensi', 'index_siswa')->name('referensi');
        Route::get('/referensi/lihat-referensi/{id}', 'read_siswa')->name('lihat-referensi');
    });


    Route::controller(KuisController::class)->group(function () {
        Route::get('/kuis', 'index')->name('kuis');
        Route::get('/kuis/mulai/{id}', 'index_mulai')->name('mulai-kuis');
        Route::get('/kuis/{id}', 'index_soal')->name('soal-kuis');
        Route::get('/kuis/{id}', 'index_soal')->name('soal-kuis');

        Route::post('/kuis/store', 'store')->name('store.kuis');
        // Route::post('/kuis/store', 'store2')->name('store2.kuis');
        // Route::get('/referensi/lihat-referensi', 'read_siswa')->name('lihat-referensi');
    });





    // Route::get('/kuis/mulai-kuis', function () {
    //     return Inertia::render('Siswa/MulaiKuisSiswa');
    // })->name('mulai-kuis');

    // Route::get('/kuis/soal-kuis', function () {
    //     return Inertia::render('Siswa/SoalKuisSiswa');
    // })->name('soal-kuis');



    // Tugas
    Route::controller(TugasResultController::class)->group(function () {
        Route::get('/tugas', 'index_siswa')->name('tugas');
        Route::get('/tugas/detail-tugas/{id}', 'edit_answer')->name('detail-tugas');
        Route::post('/tugas/detail-tugas', 'store')->name('store-tugas');
        Route::post('/tugas/detail-tugas/{id}', 'update')->name('update-tugas');
    });

    Route::controller(DownloadController::class)->group(function () {
        Route::get('/submateri/file/{id}', 'submateri_file')->name('submateri.file');
        Route::get('/referensi/file/{id}', 'referensi_file')->name('referensi.file');
    });



    // Panduan
    Route::get('/panduan', function () {
        return Inertia::render('Siswa/PanduanSiswa');
    })->name('panduan');
});
//End SISWA






Route::middleware('auth')->group(function () {
    Route::get('/edit-profil', [ProfileController::class, 'edit'])->name('edit-profil.edit');
    Route::patch('/edit-profil', [ProfileController::class, 'update'])->name('edit-profil.update');
    Route::delete('/edit-profil', [ProfileController::class, 'destroy'])->name('edit-profil.destroy');
});

require __DIR__ . '/auth.php';
