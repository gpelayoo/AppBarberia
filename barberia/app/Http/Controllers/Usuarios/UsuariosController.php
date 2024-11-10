<?php

namespace App\Http\Controllers\Usuarios;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UsuariosController extends Controller
{
    public function index()
    {
        $usuarios = User::select('id', 'name', 'email', 'role')->get();  

        return Inertia::render('Users/Usuarios', [
            'usuarios' => $usuarios,
        ]);
    }

    public function edit($id)
    {
        $usuario = User::find($id);

        return Inertia::render('Users/UsuariosEdit', [
            'usuario' => $usuario,
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'role' => 'nullable|string',
        ]);

        $usuario = User::findOrFail($id);
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->role = $request->role;

        if ($request->password) {
            $usuario->password = Hash::make($request->password);
        }

        $usuario->save();

        return redirect()->route('usuarios')->with('success', 'Usuario actualizado correctamente.');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|string',
        ]);

        $usuario = new User();
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->password = Hash::make($request->password);
        $usuario->role = $request->role;
        $usuario->save();

        return redirect()->route('usuarios')->with('success', 'Usuario creado correctamente.');
    }

    public function delete($id)
    {
        $usuario = User::findOrFail($id);

        $usuario->delete();

        return redirect()->route('usuarios')->with('success', 'Usuario eliminado correctamente.');
    }

    public function getBarbers()
    {
        $users = User::where('role','Barbero')->get();
        return response()->json($users);
    }


}
