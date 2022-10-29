<?php


namespace App\Core\Interfaces\Controller;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

interface IHttpISSUD
{
    public function index():JsonResponse;
    public function store(Request $request):JsonResponse;
    public function show(int $id):JsonResponse;
    public function update(Request $request, int $id):JsonResponse;
    public function destroy(int $id):JsonResponse;
}
