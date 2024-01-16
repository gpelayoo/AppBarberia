<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Ruta de Inicio
Route::get('/', function () {
    return view('home.home');
});

// Rutas relacionadas con la asignación de turnos en la barbería
Route::group(['prefix' => 'Turnos','as' => 'turnos.' ,'controller' => \App\Http\Controllers\Turnos\TurnosController::class], function(){
    Route::get('/', 'getView')->name('getView');
    Route::post('/save', 'save')->name('save');
    Route::get('/getTurnos/{documentType}/{documentNumber}', 'getTurnos')->name('getTurnos');
    Route::post('/update/{turnoId}', 'update')->name('update');
});

//Rutas de servicios
Route::group(['prefix' => 'Servicios','as' => 'servicios.' ,'controller' => \App\Http\Controllers\Servicios\ServiciosController::class], function(){
    Route::get('/', 'getView')->name('getView');
});
