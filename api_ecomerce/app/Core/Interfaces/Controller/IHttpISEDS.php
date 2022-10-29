<?php


namespace App\Core\Interfaces\Controller;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

interface IHttpISEDS
{
    public function index():JsonResponse;
    public function store(Request $request):JsonResponse;
    public function edit(Request $request, int $id):JsonResponse;
    public function destroy(int $id):JsonResponse;
    public function show(int $id):JsonResponse;

}
