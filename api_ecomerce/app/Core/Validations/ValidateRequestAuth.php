<?php


namespace App\Core\Validations;


use App\Core\Interfaces\Validations\ValidateAuth;
use App\Core\Shared\ValidateRequest;
use Illuminate\Http\Request;

class ValidateRequestAuth implements ValidateAuth
{
    private ValidateRequest $validate;

    public function __construct(ValidateRequest $validate)
    {
        $this->validate = $validate;
    }

    public function validateRegister(Request $rq): array
    {
        $rules = [
            'nuip' => 'required|unique:users',
            'nombres' => 'required',
            'apellidos' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',

        ];

        $messages = [
            'nuip.required' => 'El numero de identificación es requerido!',
            'nuip.unique' => 'El numero de identificación esta en uso!',
            'nombres.required' => 'El nombre es requerido!',
            'apellidos.required' => 'El apellido es requerido',
            'email.required' => 'El correo es requerido',
            'email.unique' => 'El correo ya esta en uso!',
            'email.email' => 'El correo no es valido',
            'password.required' => 'La contraseña es requerida',

        ];
        return $this->validate->validate($rq, $rules, $messages);
    }

    public function validateLogin(Request $rq): array
    {
        $rules = [
            'email' => 'required|email',
            'password' => 'required',
        ];

        $messages = [
            'email.required' => 'El correo es requerido',
            'email.email' => 'El correo no es valido',
            'password.required' => 'La contraseña es requerida',
        ];
        return $this->validate->validate($rq, $rules, $messages);
    }
}
