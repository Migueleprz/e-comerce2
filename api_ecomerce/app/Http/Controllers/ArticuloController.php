<?php

namespace App\Http\Controllers;

use App\Core\Classes\Articulos;
use App\Core\Interfaces\Controller\IHttpISSUD;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ArticuloController extends Controller implements IHttpISSUD
{
    private Articulos $articulos;

    public function __construct(Articulos $articulos)
    {
        $this->articulos = $articulos;
    }

    //
    public function index(): JsonResponse
    {
        $data = $this->articulos->read();
        return response()->json($data['data'], $data['status']);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->articulos->create($request);
        return response()->json($data['data'], $data['status']);
    }

    public function show(int $id): JsonResponse
    {
        $data = $this->articulos->get($id);
        return response()->json($data['data'], $data['status']);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $data = $this->articulos->update($request, $id);
        return response()->json($data['data'], $data['status']);
    }

    public function destroy(int $id): JsonResponse
    {
        $data = $this->articulos->delete($id);
        return response()->json($data['data'], $data['status']);
    }
}
