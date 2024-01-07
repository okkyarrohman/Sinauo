<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soal extends Model
{
    use HasFactory;

    protected $table = 'soals';
    protected $fillable = ['kategori_id', 'soal', 'gambar'];

    public function kategori()
    {
        return $this->belongsTo(KategoriKuis::class, 'kategori_id');
    }
}
