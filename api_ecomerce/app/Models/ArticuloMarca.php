<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticuloMarca extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'image',
        'image_path',
    ];
}
