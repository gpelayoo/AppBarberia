<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FrontController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Client\ClientController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'Turnos','as' => 'turnos.' ,'controller' => \App\Http\Controllers\Turnos\TurnosController::class], function(){
    Route::get('/', 'getView')->name('getView');
    Route::post('/save', 'save')->name('save');
    Route::get('/getTurnos/{documentType}/{documentNumber}', 'getTurnos')->name('getTurnos');
    Route::post('/update/{turnoId}', 'update')->name('update');
});