<?php

namespace App\Http\Controllers;

use App\Core\Classes\ArticuloMarcas;
use App\Core\Interfaces\Controller\IHttpISEDS;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class ArticuloMarcaController extends Controller implements IHttpISEDS
{
    private ArticuloMarcas $marcas;

    public function __construct(ArticuloMarcas $marcas)
    {
        $this->marcas = $marcas;
    }

    //
    public function index(): JsonResponse
    {
        $data = $this->marcas->read();
        return response()->json($data['data'], $data['status']);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->marcas->create($request);
        return response()->json($data['data'], $data['status']);
    }

    public function edit(Request $request, int $id): JsonResponse
    {
        $data = $this->marcas->update($request, $id);
        return response()->json($data['data'], $data['status']);

    }

    public function destroy(int $id): JsonResponse
    {
        $data = $this->marcas->delete($id);
        return response()->json($data['data'], $data['status']);
    }

    public function show(int $id): JsonResponse
    {
        $data = $this->marcas->get($id);
        return response()->json($data['data'], $data['status']);
    }
}
