<?php


namespace App\Http\Controllers;


use App\Core\Classes\ArticuloSexs;
use App\Core\Interfaces\Controller\IHttpArticuloSex;
use Illuminate\Http\JsonResponse;

final class ArticuloSexController extends Controller implements IHttpArticuloSex
{
    private ArticuloSexs $sexs;

    public function __construct(ArticuloSexs $sexs)
    {
        $this->sexs = $sexs;
    }

    public function index(): JsonResponse
    {
        $data = $this->sexs->read();
        return  response()->json($data['data'], $data['status']);
    }
}
