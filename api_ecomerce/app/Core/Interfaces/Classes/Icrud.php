<?php


namespace App\Core\Interfaces\Classes;


use Illuminate\Http\Request;

interface Icrud
{
    public function read():array;
    public function create(Request $request):array;
    public function update(Request $request, int $id):array;
    public function delete(int $id):array;
    public function get(int $id):array;
}
