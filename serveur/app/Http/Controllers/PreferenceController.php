<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Preference;
use Illuminate\Support\Facades\Validator;

class PreferenceController extends Controller
{
    public function index()
    {
        return response()->json(Preference::all());
    }

    public function show($id)
    {
        $preference = Preference::find($id);
        if (!$preference) {
            return response()->json(['message' => 'Preference not found'], 404);
        }
        return response()->json($preference);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Theme' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $preference = Preference::create($request->all());
        return response()->json($preference, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Theme' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $preference = Preference::find($id);
        if (!$preference) {
            return response()->json(['message' => 'Preference not found'], 404);
        }

        $preference->update($request->all());
        return response()->json($preference);
    }

    public function destroy($id)
    {
        $preference = Preference::find($id);
        if (!$preference) {
            return response()->json(['message' => 'Preference not found'], 404);
        }

        $preference->delete();
        return response()->json(['message' => 'Preference deleted successfully']);
    }
}
