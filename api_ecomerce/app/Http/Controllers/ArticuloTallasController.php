<?php

namespace App\Http\Controllers;

use App\Core\Classes\ArticuloTalla;
use App\Core\Interfaces\Controller\IHttpISSUD;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ArticuloTallasController extends Controller implements IHttpISSUD
{
    private ArticuloTalla $talla;
    public function __construct(ArticuloTalla $talla)
    {
        $this->talla = $talla;
    }

    //
    public function index(): JsonResponse
    {
        $data = $this->talla->read();
        return response()->json($data['data'], $data['status']);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->talla->create($request);
        return response()->json($data['data'], $data['status']);
    }

    public function show(int $id): JsonResponse
    {
        $data = $this->talla->get($id);
        return response()->json($data['data'], $data['status']);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $data = $this->talla->update($request, $id);
        return response()->json($data['data'], $data['status']);
    }

    public function destroy(int $id): JsonResponse
    {
        $data = $this->talla->delete($id);
        return response()->json($data['data'], $data['status']);
    }
}
