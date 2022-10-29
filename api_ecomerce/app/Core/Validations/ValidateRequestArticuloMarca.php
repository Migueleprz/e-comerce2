<?php


namespace App\Core\Validations;


use App\Core\Interfaces\Validations\ValidateRequests;
use App\Core\Shared\ValidateRequest;
use Illuminate\Http\Request;

class ValidateRequestArticuloMarca implements ValidateRequests
{
    private ValidateRequest $validate;

    public function __construct(ValidateRequest $validate)
    {
        $this->validate = $validate;
    }

    public function request(Request $rq): array
    {
        $rules = [
            'nombre' => 'required',
        ];

        $messages = [
            'nombre.required' => 'El nombre de la marca es rquerido!',
        ];
        return $this->validate->validate($rq, $rules, $messages);
    }
}
