<?php

namespace App\Models\Turnos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    use HasFactory;

    public function index()
    {
        $turnos = Turno::all();  
        return Inertia::render('Turnos/Index', [
            'turnos' => $turnos, 
        ]);
    }
}
