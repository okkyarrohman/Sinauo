<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TugasResult extends Model
{
    use HasFactory;

    protected $table = 'tugas_results';

    protected $fillable = [
        'answer1',
        'asnwer2',
        'asnwer3',
        'asnwer4',
        'konfirmasi',
        'feedback'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function tugas()
    {
        return $this->belongsTo(Tugas::class, 'tugas_id');
    }
}
