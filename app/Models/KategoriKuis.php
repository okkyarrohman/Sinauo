<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KategoriKuis extends Model
{
    use HasFactory;

    protected $table = 'kategori_kuis';

    protected $fillable = ['name', 'tenggat', 'waktu'];

    public function soal()
    {
        return $this->hasMany(Soal::class);
    }
}
