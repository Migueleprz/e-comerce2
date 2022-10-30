<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\Icrud;
use App\Core\Validations\ValidateRequestArticuloTipo;
use App\Models\ArticuloTipo;
use Illuminate\Http\Request;

final class ArticuloTipos implements Icrud
{
    private ValidateRequestArticuloTipo $requestArticuloTipo;
    private ArticuloTipo $tipo;

    public function __construct(
        ValidateRequestArticuloTipo $requestArticuloTipo,
        ArticuloTipo $tipo
    )
    {
        $this->requestArticuloTipo = $requestArticuloTipo;
        $this->tipo = $tipo;
    }

    public function read(): array
    {
        try {
            $count = $this->tipo->all()->count();
            if ($count === 0) {
                return ['data' => '0 Registros', 'status' => 404];
            }
            return ['data' => $this->tipo->all(), 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function create(Request $request): array
    {
        $resp = $this->requestArticuloTipo->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }
        try {
            $this->tipo = $this->tipo->create([
                'nombre' => strtoupper($request->nombre)
            ]);
            return ['data' => 'El tipo de articulo: ' . $this->tipo->nombre . ' registrado con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function update(Request $request, int $id): array
    {
        $resp = $this->requestArticuloTipo->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }

        try {
            $data = $this->tipo->find($id);
            if (empty($data)) {
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            $data->nombre = strtoupper($request->nombre);
            $data->save();
            return ['data' => 'El tipo de articulo: ' . $data->nombre . ' actualizado con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function delete(int $id): array
    {
        try {
            $data = $this->tipo->find($id);
            if(empty($data)){
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            $data->delete();
            return ['data' => 'El tipo de articulo: '. $data->nombre.' eliminado con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function get(int $id): array
    {
        try {
            $data = $this->tipo->find($id);
            if(empty($data)){
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            return ['data' => $data, 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }
}
