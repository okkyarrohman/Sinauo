<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubmateriSeen extends Model
{
    use HasFactory;

    protected $table = 'submateri_seens';

    protected $fillable = [
        'submateri_id',
        'user_id',
        'is_seen'
    ];

    public function submateri() {
        return $this->belongsTo(SubMateri::class, 'submateri_id', 'id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
