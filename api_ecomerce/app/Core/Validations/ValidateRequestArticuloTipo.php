<?php


namespace App\Core\Validations;


use App\Core\Interfaces\Validations\ValidateRequests;
use App\Core\Shared\ValidateRequest;
use Illuminate\Http\Request;

class ValidateRequestArticuloTipo implements ValidateRequests
{
    private ValidateRequest $validate;

    public function __construct(ValidateRequest $validate)
    {
        $this->validate = $validate;
    }

    public function request(Request $rq): array
    {
        $rules = [
            'nombre' => ['required','unique:articulo_tipos'],
        ];

        $messages = [
            'nombre.required' => 'El nombre del tipo de articulo es rquerido!',
            'nombre.unique' => 'El nombre del tipo de articulo ya se encuentra registrado!',
        ];
        return $this->validate->validate($rq, $rules, $messages);
    }
}
