<?php

namespace App\Http\Controllers\Servicios;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Servicios\Servicio;
use Inertia\Inertia;

class ServiciosController extends Controller
{
    public function index()
    {
        $servicios = Servicio::all();

        return Inertia::render('Servicios/Servicios', [
            'servicios' => $servicios,
        ]);
    }
}
