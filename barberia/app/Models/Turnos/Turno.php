<?php

namespace App\Models\Turnos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    use HasFactory;

    protected $fillable = [
        'document_type',
        'document_number',
        'name',
        'lastname',
        'cellphone',
        'email',
        'date',
        'time',
        'service_name',
        'barber_name',
    ];

}
