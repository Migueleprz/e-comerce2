<?php


namespace App\Core\Shared;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

final class ImageStorage
{
    public function saveImage(Request $request, string $disk, string $name): array
    {
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $fileName = $file->getClientOriginalName();
            $fileExt = $file->getClientOriginalExtension();
            $fileSize = $file->getSize();
            $imageName = str_replace(" ", "_", $name) . "." . $fileExt;
            Storage::disk($disk)->put($imageName, File::get($file));
            return ['data' => true, 'image' => $imageName];
        }
        return ['data' => false];

    }
}
