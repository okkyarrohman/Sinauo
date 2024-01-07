<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tugas extends Model
{
    use HasFactory;

    protected $table = 'tugas';

    protected $fillable = [
        'tugas',
        'tenggat',
        'step1',
        'deskripsi1',
        'step2',
        'deskripsi2',
        'step3',
        'deskripsi3',
        'step4',
        'deskripsi4',
    ];

    public function tugasResult()
    {
        return $this->hasMany(TugasResult::class);
    }
}
