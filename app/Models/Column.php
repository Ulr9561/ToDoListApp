<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Column extends Model
{
    use HasFactory;
    public function board() {
        return $this->belongsTo(Board::class);
    }

    public function items() {
        return $this->hasMany(Item::class);
    }
}
