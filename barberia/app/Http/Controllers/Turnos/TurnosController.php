<?php

namespace App\Http\Controllers\Turnos;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Turnos\TurnosRequest;
use App\Models\Turnos\Turnos;

class TurnosController extends Controller
{
    public function getView()
    {
        return view('turnos.index');
    }

    public function save(TurnosRequest $request)
    {
        \DB::beginTransaction();
        try{
            $turno = new Turnos($request->all());
            $turno->save();

            \DB::commit();

            return response()->json([
                'saved' => true,
                'turno' => $turno,
                'errors' => null
            ],200);

        }catch (\Exception $e){

            \DB::rollback();
            
            return response()->json([
                'saved' => false,
                'turno' => null,
                'errors' => $e->getMessage()
            ],500);
        }
        
    }

    public function getTurnos($documentType, $documentNumber)
    {
        $turnos = Turnos::where('document_type', $documentType)
        ->where('document_number', $documentNumber)
        ->get();

        return response()->json([
            'turnos' => $turnos
        ]);
    }

    public function update(TurnosRequest $request, $turnoId)
    {
        $turno = Turno::find($turnoId);

        if (!$turno) {
            return response()->json(['error' => 'Turno no encontrado'], 404);
        }

        $turno->update($request->all());

        return response()->json([
            'saved' => 'Turno actualizado correctamente'
        ]);
    }
}
