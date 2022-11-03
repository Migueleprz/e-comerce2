<?php

use App\Http\Controllers\ArticuloController;
use App\Http\Controllers\ArticuloMarcaController;
use App\Http\Controllers\ArticuloSexController;
use App\Http\Controllers\ArticuloTallasController;
use App\Http\Controllers\ArticuloTipoController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('registry', [AuthController::class, 'signup']);
Route::post('login', [AuthController::class, 'login']);

Route::get('marcas', [ArticuloMarcaController::class, 'index',]);
Route::get('articulos', [ArticuloController::class, 'index']);
Route::get('sex', [ArticuloSexController::class, 'index']);
Route::get('tallas', [ArticuloTallasController::class, 'index']);
Route::get('tipos', [ArticuloTipoController::class, 'index']);

Route::middleware(['auth:api'])->group(function () {
    Route::resource('marcas', ArticuloMarcaController::class)->only(['store', 'show', 'destroy']);
    Route::post('marcas/{id}', [ArticuloMarcaController::class, 'edit']);
    Route::resource('tallas', ArticuloTallasController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
    Route::resource('tipos', ArticuloTipoController::class)->only(['index', 'store', 'show', 'update', 'destroy']);
    Route::resource('articulos', ArticuloController::class)->only(['store', 'show', 'update', 'destroy']);
    Route::post('articulos/{id}', [ArticuloController::class, 'edit']);
    Route::get('logout', [AuthController::class, 'logout']);
});

