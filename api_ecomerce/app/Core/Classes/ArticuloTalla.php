<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\Icrud;
use App\Core\Validations\ValidateRequestArticuloTalla;
use App\Models\ArticuloTallas;
use Illuminate\Http\Request;


final class ArticuloTalla implements Icrud
{
    private ValidateRequestArticuloTalla $validateRequestTalla;
    private ArticuloTallas $tallas;

    public function __construct(
        ValidateRequestArticuloTalla $validateRequestTalla,
        ArticuloTallas $tallas
    )
    {
        $this->validateRequestTalla = $validateRequestTalla;
        $this->tallas = $tallas;
    }

    public function read(): array
    {
        try {
            $count = $this->tallas->all()->count();
            if ($count === 0) {
                return ['data' => '0 Registros', 'status' => 404];
            }
            return ['data' => $this->tallas->all(), 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function create(Request $request): array
    {
        $resp = $this->validateRequestTalla->request($request);
        if($resp['error']){
            return ['data' => $resp['errors'], 'status' => 400];
        }
        try {
         $this->tallas = $this->tallas->create([
                'nombre' => strtoupper($request->nombre)
            ]);
            return ['data' => 'La talla: '. $this->tallas->nombre.' registrada con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function update(Request $request, int $id): array
    {
        $resp = $this->validateRequestTalla->request($request);
        if($resp['error']){
            return ['data' => $resp['errors'], 'status' => 400];
        }

        try {
            $data = $this->tallas->find($id);
            if(empty($data)){
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            $data->nombre = strtoupper($request->nombre);
            $data->save();
            return ['data' => 'La talla: '. $data->nombre.' actualizada con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function delete(int $id): array
    {
        try {
            $data = $this->tallas->find($id);
            if(empty($data)){
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            $data->delete();
            return ['data' => 'La talla: '. $data->nombre.' eliminada con exito', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function get(int $id): array
    {
        try {
            $data = $this->tallas->find($id);
            if(empty($data)){
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            return ['data' => $data, 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }
}
