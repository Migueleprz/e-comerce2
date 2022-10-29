<?php


namespace App\Core\Shared;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

final class ValidateRequest
{
    public function validate(Request $rq, $rule, $message): array
    {
        $validator = Validator::make($rq->all(), $rule, $message);
        if ($validator->fails()) {
            return ['error' => true, 'errors' => $validator->errors()];
        }
        return ['error' => false];
    }
}
