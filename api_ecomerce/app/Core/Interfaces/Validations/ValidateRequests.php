<?php


namespace App\Core\Interfaces\Validations;


use Illuminate\Http\Request;

interface ValidateRequests
{
    public function request(Request $rq):array;
}
