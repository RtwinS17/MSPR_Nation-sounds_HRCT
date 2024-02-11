<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partenaire;
use Illuminate\Support\Facades\Validator;

class PartenaireController extends Controller
{
    public function index()
    {
        $partenaires = Partenaire::all();
        return response()->json($partenaires);
    }

    public function show($id)
    {
        $partenaire = Partenaire::find($id);
        if (!$partenaire) {
            return response()->json(['message' => 'Partenaire not found'], 404);
        }
        return response()->json($partenaire);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Catégories' => 'required',
            'Nom' => 'required',
            'Logo' => 'required|integer',
            'Url' => 'required|url',
           
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $partenaire = Partenaire::create($request->all());
        return response()->json($partenaire, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Id_concert' => 'required',
            'Catégories' => 'required',
            'Nom' => 'required',
            'Logo' => 'required|integer',
            'Url' => 'required|url',
           
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $partenaire = Partenaire::find($id);
        if (!$partenaire) {
            return response()->json(['message' => 'Partenaire not found'], 404);
        }

        $partenaire->update($request->all());
        return response()->json($partenaire);
    }

    public function destroy($id)
    {
        $partenaire = Partenaire::find($id);
        if (!$partenaire) {
            return response()->json(['message' => 'Partenaire not found'], 404);
        }

        $partenaire->delete();
        return response()->json(['message' => 'Partenaire deleted successfully']);
    }
}
