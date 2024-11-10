<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Usuarios\UsuariosController;
use App\Http\Controllers\Turnos\TurnosController;
use App\Http\Controllers\Servicios\ServiciosController;
use App\Http\Controllers\Clients\ClientsController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //Rutas para el perfil de usuario
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //Rutas vista de gestión de usuarios
    Route::get('/usuarios', [UsuariosController::class, 'index'])->name('usuarios');
    Route::get('/usuarios/{id}/edit', [UsuariosController::class, 'edit'])->name('usuarios.edit');
    Route::post('/usuarios/update/{id}', [UsuariosController::class, 'update'])->name('usuarios.update');
    Route::post('/usuarios', [UsuariosController::class, 'store'])->name('usuarios.store');
    Route::post('/usuarios/{id}', [UsuariosController::class, 'delete'])->name('usuarios.delete');
    Route::get('/usuarios/getBarbers', [UsuariosController::class, 'getBarbers'])->name('usuarios.getBarbers');

    //Rutas vista de gestión de clientes
    Route::get('/clients', [ClientsController::class, 'index'])->name('clients');
    Route::get('/clients/{id}/edit', [ClientsController::class, 'edit'])->name('clients.edit');
    Route::post('/clients/update/{id}', [ClientsController::class, 'update'])->name('clients.update');
    Route::post('/clients', [ClientsController::class, 'store'])->name('clients.store');
    Route::post('/clients/{id}', [ClientsController::class, 'delete'])->name('clients.delete');
    Route::get('/clients/getClients', [ClientsController::class, 'getClients'])->name('clients.getClients');

    //Rutas vista de asignación de turnos
    Route::get('/turnos', [TurnosController::class, 'index'])->name('turnos');
    Route::get('/turnos/{id}/edit', [TurnosController::class, 'edit'])->name('turnos.edit');
    Route::post('/turnos/update/{id}', [TurnosController::class, 'update'])->name('turnos.update');
    Route::post('/turnos', [TurnosController::class, 'store'])->name('turnos.store');
    Route::post('/turnos/{id}', [TurnosController::class, 'delete'])->name('turnos.delete');

    //Rutas vista de servicios
    Route::get('/servicios', [ServiciosController::class, 'index'])->name('servicios');

});


require __DIR__.'/auth.php';
