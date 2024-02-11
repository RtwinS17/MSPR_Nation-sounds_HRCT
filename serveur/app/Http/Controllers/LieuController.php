<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lieu;
use Illuminate\Support\Facades\Validator;

class LieuController extends Controller
{
    public function index()
    {
        $lieux = Lieu::all();
        return response()->json($lieux);
    }

    public function show($id)
    {
        $lieu = Lieu::find($id);
        if (!$lieu) {
            return response()->json(['message' => 'Lieu not found'], 404);
        }
        return response()->json($lieu);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'latitude' => 'required',
            'longitude' => 'required',
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $lieu = Lieu::create($request->all());
        return response()->json($lieu, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $lieu = Lieu::find($id);
        if (!$lieu) {
            return response()->json(['message' => 'Lieu not found'], 404);
        }

        $lieu->update($request->all());
        return response()->json($lieu);
    }

    public function destroy($id)
    {
        $lieu = Lieu::find($id);
        if (!$lieu) {
            return response()->json(['message' => 'Lieu not found'], 404);
        }

        $lieu->delete();
        return response()->json(['message' => 'Lieu deleted successfully']);
    }
}

