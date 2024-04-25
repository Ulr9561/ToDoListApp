<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'uuid',
        'column_id',
        'title',
        'description',
        'priority',
        'deadline',
        'image',
        'alt',
    ];

    public function item() {
        return $this->belongsTo(Column::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }
}
