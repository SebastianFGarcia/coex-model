<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{
    
    public function index()
    {
        return response()->json(Cliente::all());
    }

    public function store(Request $request)
    {
        $cliente = Cliente::create($request->all());
        return response()->json($cliente, 201);
    }

    public function show($id)
    {
        return response()->json(Cliente::find($id));
    }

    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->update($request->all());

        return response()->json($cliente, 200);
    }

    public function destroy($id)
    {
        Cliente::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
