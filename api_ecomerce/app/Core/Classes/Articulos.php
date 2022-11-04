<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\Icrud;
use App\Core\Shared\ImageStorage;
use App\Core\Validations\ValidateRequestArticulo;
use App\Models\Articulo;
use Illuminate\Http\Request;

final class Articulos implements Icrud
{
    private ValidateRequestArticulo $requestArticulo;
    private Articulo $articulo;
    private ImageStorage $imageStorage;

    public function __construct(
        ValidateRequestArticulo $requestArticulo,
        Articulo $articulo,
        ImageStorage $imageStorage
    )
    {
        $this->requestArticulo = $requestArticulo;
        $this->articulo = $articulo;
        $this->imageStorage = $imageStorage;
    }

    public function read(): array
    {
        try {
            $count = $this->articulo->all()->count();
            if ($count === 0) {
                return ['data' => '0 Datos', 'status' => 404];
            }

            $data = $this->articulo->with(['marcas','tipos','tallas','sex'])->paginate();
            return ['data' => $data, 'status' => 200];
        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function create(Request $request): array
    {
        $resp = $this->requestArticulo->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }
        try {
            $imageName = 'default.png';
            $imagePath = env('APP_URL') . 'storage/default.png';
            $disk = 'articles';

            $respImg = $this->imageStorage->saveImage($request, $disk, $request->nombre);
            if ($respImg['data']) {
                $imageName = $respImg['image'];
                $imagePath = env('APP_URL') . $disk . '/' . $imageName;
            }
            $this->articulo = $this->articulo->create([
                'nombre' => ucwords($request->nombre),
                'precio' => $request->precio,
                'preciop' => $request->preciop,
                'stock' => $request->stock,
                'image' => $imageName,
                'image_path' => $imagePath,
                'marca_id' => $request->marca_id,
                'tipo_id' => $request->tipo_id,
                'talla_id' => $request->talla_id,
                'sex_id' => $request->sex_id,
                'descripcion' => $request->descripcion,
            ]);
            return ['data' => 'Articulo: ' . $this->articulo->nombre . ' registrado!', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function update(Request $request, int $id): array
    {
        $resp = $this->requestArticulo->request($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }

        try {
            $data = $this->articulo->find($id);
            if (empty($data)) {
                return ['data' => 'Datos no econtrado', 'status' => 404];
            }
            $imageName = $data->image;
            $imagePath = $data->image_path;
            $disk = 'articles';

            $respImg = $this->imageStorage->saveImage($request, $disk, $request->nombre);
            if ($respImg['data']) {
                $imageName = $respImg['image'];
                $imagePath = env('APP_URL') . $disk . '/' . $imageName;
            }
            $data->nombre = ucwords($request->nombre);
            $data->precio = $request->precio;
            $data->preciop = $request->preciop;
            $data->stock = $request->stock;
            $data->image = $imageName;
            $data->image_path = $imagePath;
            $data->marca_id = $request->marca_id;
            $data->tipo_id = $request->tipo_id;
            $data->talla_id = $request->talla_id;
            $data->sex_id = $request->sex_id;
            $data->descripcion = ucwords($request->descripcion);
            $data->save();
            return ['data' => 'Articulo: ' . $data->nombre . ' actualizado!', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function delete(int $id): array
    {
        try {
            $data = $this->articulo->find($id);
            if (empty($data)) {
                return ['data' => 'Datos no econtrado', 'status' => 404];
            }
            $data->delete();
            return ['data' => 'Articulo: ' . $data->nombre . ' eliminado!', 'status' => 200];
        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }

    public function get(int $id): array
    {
        try {
            $data = $this->articulo->where(['id'=>$id])->with(['marcas', 'tipos', 'tallas','sex'])->get();
            if (empty($data)) {
                return ['data' => 'Datos no econtrado', 'status' => 404];
            }
            return ['data' => $data, 'status' => 200];
        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }
}
