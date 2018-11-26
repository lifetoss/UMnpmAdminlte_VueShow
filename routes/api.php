<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// we create api controller using this command php artisan make:controller API/UserController --api
//thats why we are using this type of route
//route value should be in array couse it only accept array value in api mode
Route::apiResources(['user'=>'API\UserController']);