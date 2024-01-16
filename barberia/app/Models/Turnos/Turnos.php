<?php

namespace App\Models\Turnos;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turnos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'document_type',
        'document_number',
        'name',
        'lastname',
        'cellphone',
        'email',
        'date',
        'time',
        'barber_name',
        'state'
    ];
}
