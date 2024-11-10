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

    public function edit($id)
    {
        $turno = Turno::find($id);

        return Inertia::render('Turnos/TurnosEdit', [
            'turno' => $turno,
        ]);
    }

    public function update(Request $request, $id)
    {
        $turno = Turno::findOrFail($id);
        $turno->document_number = $request->document_number;
        $turno->name = $request->name;
        $turno->lastname = $request->lastname;
        $turno->cellphone = $request->cellphone;
        $turno->email = $request->email;
        $turno->date = $request->date;
        $turno->time = $request->time;
        $turno->barber_name = $request->barber_name;
        $turno->service_name = $request->service_name;

        $turno->save();

        return redirect()->route('turnos')->with('success', 'Turno actualizado correctamente.');
    }

    public function store(Request $request)
    {
        $turno = new Turno();
        $turno->document_number = $request->document_number;
        $turno->name = $request->name;
        $turno->lastname = $request->lastname;
        $turno->cellphone = $request->cellphone;
        $turno->email = $request->email;
        $turno->date = $request->date;
        $turno->time = $request->time;
        $turno->barber_name = $request->barber_name;
        $turno->service_name = $request->service_name;
        $turno->save();

        return redirect()->route('turnos')->with('success', 'Turno creado correctamente.');
    }

    public function delete($id)
    {
        $turno = Turno::findOrFail($id);

        $turno->delete();

        return redirect()->route('turnos')->with('success', 'Turno eliminado correctamente.');
    }

}
