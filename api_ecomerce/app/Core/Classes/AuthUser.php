<?php


namespace App\Core\Classes;


use App\Core\Interfaces\Classes\IAuth;
use App\Core\Shared\ImageStorage;
use App\Core\Validations\ValidateRequestAuth;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

final class AuthUser implements IAuth
{
    private ValidateRequestAuth $requestAuth;
    private ImageStorage $imageStorage;
    private User $user;

    public function __construct(
        ValidateRequestAuth $requestAuth,
        ImageStorage $imageStorage,
        User $user

    )
    {
        $this->requestAuth = $requestAuth;
        $this->imageStorage = $imageStorage;
        $this->user = $user;
    }

    public function register(Request $request): array
    {
        $imageName = 'default.png';
        $imagePath = env('APP_URL').'storage/default.png';
        $disk = 'users';
        $resp = $this->requestAuth->validateRegister($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }
        try {
            $resp = $this->imageStorage->saveImage($request, $disk, $request->nuip);
            if ($resp) {
                $imageName = $resp['image'];
                $imagePath = env('APP_URL').$disk.'/'.$imageName;
            }
            $this->user = $this->user->create([
                'nuip'=> $request->nuip,
                'nombres'=> ucwords($request->nombres),
                'apellidos'=> ucwords($request->apellidos),
                'email'=> $request->email,
                'password'=> Hash::make($request->password),
                'image'=> $imageName,
                'image_path'=> $imagePath,
                'is_admin'=> false,

            ]);
            return ['data' => $this->user->nombres.' '.$this->user->apellidos.' regsitrado con exito!', 'status' => 200];

        } catch (\Exception $e) {
            return ['data' => $e->getMessage(), 'status' => 500];
        }

    }

    public function login(Request $request): array
    {
        $resp = $this->requestAuth->validateLogin($request);
        if ($resp['error']) {
            return ['data' => $resp['errors'], 'status' => 400];
        }

        $data = [
            'email'=> $request->email,
            'password' => $request->password
        ];
        if(auth()->attempt($data)){
            $this->user = $this->user->find(auth()->user()->id);
            $user = [
                'token'=> auth()->user()->createToken('authUser')->accessToken,
                'sub' => $this->user->id,
                'user' => $this->user->nombres.' '.$this->user->apellidos,
                'email' => $this->user->email,
                'image' => $this->user->image_path,
                'type' => $this->user->is_admin
            ];
            return ['data' => $user, 'status' => 200];
        }

        return ['data' => 'Credenciales incorrectas', 'status' => 404];
    }
}


