<?php

namespace App\Http\Controllers;

use App\Models\Credito;
use Illuminate\Http\Request;

class CreditoController extends Controller
{
    public function index()
    {
        $creditos = Credito::all();
        $creditos->load('cliente');
        return response()->json($creditos);
    }

    public function store(Request $request)
    {
        $credito = Credito::create($request->all());

        return response()->json($credito, 201);
    }

    public function update(Request $request, $id)
    {
        $credito = Credito::findOrFail($id);
        $credito->update($request->all());
        return response()->json($credito, 200);
    }

    public function destroy($id)
    {
        $credito = Credito::findOrFail($id);
        $credito->delete();
        return response()->json(null, 204);
    }

    public function show($id)
    {
        $credito = Credito::findOrFail($id);
        $credito->load('cliente');
        return response()->json($credito);
    }
}
