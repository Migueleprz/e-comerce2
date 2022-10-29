<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articulos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 80)->unique();
            $table->integer('precio')->default(0);
            $table->integer('preciop')->default(0);
            $table->integer('stock')->default(0);
            $table->string('image',80);
            $table->string('image_path',100);
            $table->foreignId('marca_id')->constrained('articulo_marcas');
            $table->foreignId('tipo_id')->constrained('articulo_tipos');
            $table->foreignId('talla_id')->constrained('articulo_tallas');
            $table->foreignId('sex_id')->constrained('articulo_sexes');
            $table->text('descripcion')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articulos');
    }
};
