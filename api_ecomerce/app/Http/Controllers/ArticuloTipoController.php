<?php

namespace App\Http\Controllers;

use App\Core\Classes\ArticuloTipos;
use App\Core\Interfaces\Controller\IHttpISSUD;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class ArticuloTipoController extends Controller implements IHttpISSUD
{
    private ArticuloTipos $tipos;

    public function __construct(ArticuloTipos $tipos)
    {
        $this->tipos = $tipos;
    }


    public function index(): JsonResponse
    {
        $data = $this->tipos->read();
        return response()->json($data['data'], $data['status']);
    }

    public function store(Request $request): JsonResponse
    {
        $data = $this->tipos->create($request);
        return response()->json($data['data'], $data['status']);
    }

    public function show(int $id): JsonResponse
    {
        $data = $this->tipos->get($id);
        return response()->json($data['data'], $data['status']);
    }

    public function update(Request $request, int $id): JsonResponse
    {
        $data = $this->tipos->update($request,$id);
        return response()->json($data['data'], $data['status']);
    }

    public function destroy(int $id): JsonResponse
    {
        $data = $this->tipos->delete($id);
        return response()->json($data['data'], $data['status']);
    }
}
