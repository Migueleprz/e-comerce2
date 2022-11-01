<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Articulo extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'precio',
        'preciop',
        'stock',
        'image',
        'image_path',
        'marca_id',
        'tipo_id',
        'talla_id',
        'sex_id',
        'descripcion',
    ];

    public function marcas():BelongsTo
    {
        return $this->belongsTo(ArticuloMarca::class,'marca_id');
    }

    public function tipos():BelongsTo
    {
        return $this->belongsTo(ArticuloTipo::class,'tipo_id');
    }

    public function tallas():BelongsTo
    {
        return $this->belongsTo(ArticuloTallas::class,'talla_id');
    }

    public function sex():BelongsTo
    {
        return $this->belongsTo(ArticuloSex::class,'sex_id');
    }
}
