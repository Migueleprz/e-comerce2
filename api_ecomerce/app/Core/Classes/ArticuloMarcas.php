<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\Icrud;

use App\Core\Shared\ImageStorage;
use App\Core\Validations\ValidateRequestArticuloMarca;
use App\Models\ArticuloMarca;
use Illuminate\Http\Request;


final class ArticuloMarcas implements Icrud
{
    private ArticuloMarca $articleMaraca;
    private ValidateRequestArticuloMarca $validateArticuloMarca;
    private ImageStorage $imageStorage;

    public function __construct(
        ArticuloMarca $articleMaraca,
        ValidateRequestArticuloMarca $validateArticuloMarca,
        ImageStorage $imageStorage
    )
    {
        $this->articleMaraca = $articleMaraca;
        $this->validateArticuloMarca = $validateArticuloMarca;
        $this->imageStorage = $imageStorage;
    }

    public function read(): array
    {
        try {
            $data = $this->articleMaraca->all();
            if ($data->count() === 0) {
                return ['data' => '0 Registros', 'status' => 404];
            }
            return ['data' => $data, 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function create(Request $request): array
    {
        $resp = $this->validateArticuloMarca->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }
        try {
            $imageName = 'default.png';
            $imagePath = env('APP_URL') . 'storage/default.png';
            $disk = 'marcas';

            $respImg = $this->imageStorage->saveImage($request, $disk, $request->nombre);
            if ($respImg['data']) {
                $imageName = $respImg['image'];
                $imagePath = env('APP_URL') . $disk . '/' . $imageName;
            }

            $this->articleMaraca = $this->articleMaraca->create([
                'nombre' => ucwords($request->nombre),
                'image' => $imageName,
                'image_path' => $imagePath
            ]);

            return ['data' => 'La Marca: ' . $this->articleMaraca->nombre . ' ha sido registrada!', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function update(Request $request, int $id): array
    {
        $resp = $this->validateArticuloMarca->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }

        try {

            $artMarca = $this->articleMaraca->find($id);
            if (empty($artMarca)) {
                return ['data' => 'Datos no econtrado', 'status' => 404];
            }

            $imageName = $artMarca->image;
            $imagePath = $artMarca->image_path;
            $disk = 'marcas';

            $respImg = $this->imageStorage->saveImage($request, $disk, $request->nombre);
            if ($respImg['data']) {
                $imageName = $respImg['image'];
                $imagePath = env('APP_URL') . $disk . '/' . $imageName;
            }

            $artMarca->nombre = ucwords($request->nombre);
            $artMarca->image = $imageName;
            $artMarca->image_path = $imagePath;
            $artMarca->save();

            return ['data' => 'La Marca: ' . $this->articleMaraca->nombre . ' ha sido actualizada!', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function delete(int $id): array
    {
        try {
            $artMarca = $this->articleMaraca->find($id);
            if (empty($artMarca)) {
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
            $artMarca->delete();
            return ['data' => 'Marca eliminada', 'status' => 200];
        }catch (\Exception $e){
            return ['data' => $e->getMessage(), 'status' => 500];
        }


    }

    public function get(int $id): array
    {
        try {
            $artMarca = $this->articleMaraca->find($id);
            if (empty($artMarca)) {
                return ['data' => 'Datos no econtrados', 'status' => 404];
            }
             return ['data' => $artMarca, 'status' => 200];
        }catch (\Exception $e){
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }
}
