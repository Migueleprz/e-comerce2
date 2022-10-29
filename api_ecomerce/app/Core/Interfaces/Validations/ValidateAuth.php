<?php


namespace App\Core\Interfaces\Validations;


use Illuminate\Http\Request;

interface ValidateAuth
{
    public function validateRegister(Request $rq):array;
    public function validateLogin(Request $rq):array;
}
