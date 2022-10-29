<?php


namespace App\Http\Controllers;


use App\Core\Classes\AuthUser;
use App\Core\Interfaces\Classes\HttpAuth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller implements HttpAuth
{
    private AuthUser $authUser;

    public function __construct(AuthUser $authUser)
    {
        $this->authUser = $authUser;
    }

    final public function signup(Request $request):JsonResponse
    {
        $data = $this->authUser->register($request);
        return response()->json($data['data'], $data['status']);
    }

    final public function login(Request $request):JsonResponse
    {
        $data = $this->authUser->login($request);
        return response()->json($data['data'], $data['status']);
    }
}
