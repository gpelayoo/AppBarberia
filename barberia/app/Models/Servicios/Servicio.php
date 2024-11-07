<?php

namespace App\Models\Servicios;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servicio extends Model
{
    use HasFactory;

    public function index()
    {
        $servicios = Servicio::all();  
        return Inertia::render('Servicios/Index', [
            'servicios' => $servicios,  
        ]);
    }
}
