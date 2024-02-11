<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UtilisateurController extends Controller
{
    public function index()
    {
        return response()->json(Utilisateur::all());
    }

    public function show($id)
    {
        $utilisateur = Utilisateur::find($id);
        if (!$utilisateur) {
            return response()->json(['message' => 'Utilisateur not found'], 404);
        }
        return response()->json($utilisateur);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $requestData = $request->all();
        $requestData['Password'] = Hash::make($request['Password']);
        $utilisateur = Utilisateur::create($requestData);
        return response()->json($utilisateur, 201);
    }
    

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'password' => 'sometimes|string|max:255',
        ]);
    
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
    
        $utilisateur = Utilisateur::find($id);
        if (!$utilisateur) {
            return response()->json(['message' => 'Utilisateur not found'], 404);
        }
    
        $requestData = $request->all();
        if ($request->has('Password')) {
            $requestData['Password'] = Hash::make($request['Password']);
        }
        $utilisateur->update($requestData);
        return response()->json($utilisateur);
    }
    

    public function destroy($id)
    {
        $utilisateur = Utilisateur::find($id);
        if (!$utilisateur) {
            return response()->json(['message' => 'Utilisateur not found'], 404);
        }

        $utilisateur->delete();
        return response()->json(['message' => 'Utilisateur deleted successfully']);
    }
}

