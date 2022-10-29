<?php

namespace Database\Seeders;

use App\Models\ArticuloSex;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticuloSexSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $count = ArticuloSex::all()->count();
        if ($count === 0) {
            ArticuloSex::create(['nombre' => 'Mujer']);
            ArticuloSex::create(['nombre' => 'Niña']);
            ArticuloSex::create(['nombre' => 'Hombre']);
            ArticuloSex::create(['nombre' => 'Niño']);
        }
    }
}
