<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\IArticuloSex;
use App\Models\ArticuloSex;

class ArticuloSexs implements IArticuloSex
{
    private ArticuloSex $articuloSex;

    public function __construct(ArticuloSex $articuloSex)
    {
        $this->articuloSex = $articuloSex;
    }

    public function read(): array
    {
        try {
            $count = $this->articuloSex->all()->count();
            if ($count === 0) {
                return ['data' => '0 Datos', 'status' => 404];
            }

            $data = $this->articuloSex->all();
            return ['data' => $data, 'status' => 200];
        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }
    }
}
