<?php


namespace App\Core\Interfaces\Classes;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

interface HttpAuth
{
     public function signup(Request $request):JsonResponse;

    public function login(Request $request):JsonResponse;
}
