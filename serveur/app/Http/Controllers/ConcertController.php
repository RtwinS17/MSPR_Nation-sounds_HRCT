<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Concert;
use Illuminate\Support\Facades\Validator;

class ConcertController extends Controller
{
    // Get all concert
    public function index()
    {
        $concerts = Concert::all();
        return response()->json($concerts);
    }

    // Get concert by ID
    public function show($id)
    {
        $concert = Concert::find($id);
        if (!$concert) {
            return response()->json(['message' => 'Concert not found'], 404);
        }
        return response()->json($concert);
    }

    // Create Concert
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Groupe' => 'required|string',
            'Duree' => 'required|string',
            'Horaire' => 'required|date',
            'scene_id' => 'required|exists:scene,id',
            'Descriptif' => 'required|string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $concert = Concert::create($request->all());
        return response()->json($concert, 201);
    }

    // Edit Concert
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Groupe' => 'string',
            'Duree' => 'string',
            'Horaire' => 'date',
            'scene_id' => 'exists:scene,id',
            'Descriptif' => 'string'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $concert = Concert::find($id);
        if (!$concert) {
            return response()->json(['message' => 'Concert not found'], 404);
        }

        $concert->update($request->all());
        return response()->json($concert);
    }

    // Delete Concert
    public function destroy($id)
    {
        $concert = Concert::find($id);
        if (!$concert) {
            return response()->json(['message' => 'Concert not found'], 404);
        }

        $concert->delete();
        return response()->json(['message' => 'Concert deleted successfully']);
    }
}
