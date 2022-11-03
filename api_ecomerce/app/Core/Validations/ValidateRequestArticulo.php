<?php


namespace App\Core\Validations;


use App\Core\Interfaces\Validations\ValidateRequests;
use App\Core\Shared\ValidateRequest;
use Illuminate\Http\Request;

class ValidateRequestArticulo implements ValidateRequests
{
    private ValidateRequest $validate;

    public function __construct(ValidateRequest $validate)
    {
        $this->validate = $validate;
    }

    public function request(Request $rq): array
    {
        $rules = [
            'nombre' => 'required|unique:articulos,nombre,'.$rq->id,
            'precio' => 'required|integer',
            'preciop' => 'required|integer',
            'stock' => 'required|integer',
            'marca_id' => 'required|integer',
            'tipo_id' => 'required|integer',
            'talla_id' => 'required|integer',
            'sex_id' => 'required|integer',
            'descripcion' => 'required',
        ];

        $messages = [
            'nombre.required' => 'El nombre del articulo es rquerido!',
            'nombre.unique' => 'El nombre del articulo ya esta registrado!',
            'precio.required' => 'El precio es requerido!',
            'precio.integer' => 'El precio no es valido!',
            'preciop.required' => 'El precio promocion es requerido!',
            'preciop.integer' => 'El precio promocion no es valido!',
            'stock.required' => 'El stock es requerido!',
            'stock.integer' => 'El stock no es valido!',
            'marca_id.required' => 'La marca es requerida!',
            'marca_id.integer' => 'La marca no es valida!',
            'tipo_id.required' => 'El tipo de articulo es requerida!',
            'tipo_id.integer' => 'El tipo de articulo no es valida!',
            'talla_id.required' => 'La talla del articulo es requerida!',
            'talla_id.integer' => 'La talla del articulo no es valida!',
            'sex_id.required' => 'El sexo del articulo es requerido!',
            'descripcion.required' => 'La descripcion del articulo es requerida!',

        ];
        return $this->validate->validate($rq, $rules, $messages);
    }
}
