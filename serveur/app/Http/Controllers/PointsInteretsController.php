<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PointsInterets;
use Illuminate\Support\Facades\Validator;

class PointsInteretsController extends Controller
{
    public function index()
    {
        $pointsInterets = PointsInterets::all();
        return response()->json($pointsInterets);
    }

    public function show($id)
    {
        $pointInteret = PointsInterets::find($id);
        if (!$pointInteret) {
            return response()->json(['message' => 'Point d\'intérêt non trouvé'], 404);
        }
        return response()->json($pointInteret);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Type' => 'required',
            'Nom' => 'required',
            'Id_lieu' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $pointInteret = PointsInterets::create($request->all());
        return response()->json($pointInteret, 201);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'Type' => 'required',
            'Nom' => 'required',
            'Id_lieu' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $pointInteret = PointsInterets::find($id);
        if (!$pointInteret) {
            return response()->json(['message' => 'Point d\'intérêt non trouvé'], 404);
        }

        $pointInteret->update($request->all());
        return response()->json($pointInteret);
    }

    public function destroy($id)
    {
        $pointInteret = PointsInterets::find($id);
        if (!$pointInteret) {
            return response()->json(['message' => 'Point d\'intérêt non trouvé'], 404);
        }

        $pointInteret->delete();
        return response()->json(['message' => 'Point d\'intérêt supprimé avec succès']);
    }
}
