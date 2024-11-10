<?php

namespace App\Http\Controllers\Clients;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Clients\Client;
use Inertia\Inertia;

class ClientsController extends Controller
{
    public function index()
    {
        $clients = Client::all();  

        return Inertia::render('Clients/Clients', [
            'clients' => $clients,
        ]);
    }

    public function edit($id)
    {
        $client = Client::find($id);

        return Inertia::render('Clients/ClientsEdit', [
            'client' => $client,
        ]);
    }

    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);
        $client->document_type = $request->document_type;
        $client->document_number = $request->document_number;
        $client->name = $request->name;
        $client->lastname = $request->lastname;
        $client->cellphone = $request->cellphone;
        $client->email = $request->email;

        $client->save();

        return redirect()->route('clients')->with('success', 'Cliente actualizado correctamente.');
    }

    public function store(Request $request)
    {
        $client = new Client();
        $client->document_type = $request->document_type;
        $client->document_number = $request->document_number;
        $client->name = $request->name;
        $client->lastname = $request->lastname;
        $client->cellphone = $request->cellphone;
        $client->email = $request->email;
        $client->save();

        return redirect()->route('clients')->with('success', 'Cliente creado correctamente.');
    }

    public function delete($id)
    {
        $client = Client::findOrFail($id);

        $client->delete();

        return redirect()->route('clients')->with('success', 'Cliente eliminado correctamente.');
    }

    public function getClients()
    {
        $clients = Client::select('id', 'document_number', 'name', 'lastname', 'email', 'cellphone')->get();
        return response()->json($clients);
    }

}
