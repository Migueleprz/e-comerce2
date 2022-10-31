<?php


namespace App\Core\Interfaces\Classes;


use Illuminate\Http\Request;

interface IAuth
{
    public function register(Request $rq):array;
    public function login(Request $rq):array;
    public function logout():array;
}
