<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scene;
use Illuminate\Support\Facades\Validator;

class SceneController extends Controller
{
    public function index()
    {
        return response()->json(Scene::all());
    }

    public function show($id)
    {
        $scene = Scene::find($id);
        if (!$scene) {
            return response()->json(['message' => 'Scene not found'], 404);
        }
        return response()->json($scene);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Nom' => 'required|string|max:255',
            'Type' => 'required|string|max:255',
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $scene = Scene::create($request->all());
        return response()->json($scene, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Nom' => 'required|string|max:255',
            'Type' => 'required|string|max:255',
         
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $scene = Scene::find($id);
        if (!$scene) {
            return response()->json(['message' => 'Scene not found'], 404);
        }

        $scene->update($request->all());
        return response()->json($scene);
    }

    public function destroy($id)
    {
        $scene = Scene::find($id);
        if (!$scene) {
            return response()->json(['message' => 'Scene not found'], 404);
        }

        $scene->delete();
        return response()->json(['message' => 'Scene deleted successfully']);
    }
}
