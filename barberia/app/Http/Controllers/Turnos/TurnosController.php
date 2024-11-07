<?php

namespace App\Http\Controllers\Turnos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Turnos\TurnosRequest;
use App\Models\Turnos\Turno;
use Inertia\Inertia;

class TurnosController extends Controller
{
    public function index()
    {
        $turnos = Turno::all();  

        return Inertia::render('Turnos/Turnos', [
            'turnos' => $turnos,
        ]);
    }

}
