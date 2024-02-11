<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Commentaire;
use Illuminate\Support\Facades\Validator;

class CommentaireController extends Controller
{
    public function index()
    {
        $commentaires = Commentaire::all();
        return response()->json($commentaires);
    }

    public function show($id)
    {
        $commentaire = Commentaire::find($id);
        if (!$commentaire) {
            return response()->json(['message' => 'Commentaire non trouvé'], 404);
        }
        return response()->json($commentaire);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'Id_user' => 'required',
            'Id_concert' => 'required',
            'Texte' => 'required',
            'Note' => 'required',
            'Date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $commentaire = Commentaire::create($request->all());
        return response()->json($commentaire, 201);
    }

    public function update(Request $request, $id)
    {
        $commentaire = Commentaire::find($id);
        if (!$commentaire) {
            return response()->json(['message' => 'Commentaire non trouvé'], 404);
        }

        $validator = Validator::make($request->all(), [
            'Id_user' => 'required',
            'Id_concert' => 'required',
            'Texte' => 'required',
            'Note' => 'required',
            'Date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

       

        $commentaire->update($request->all());
        return response()->json($commentaire);
    }

    public function destroy($id)
    {
        $commentaire = Commentaire::find($id);
        if (!$commentaire) {
            return response()->json(['message' => 'Commentaire non trouvé'], 404);
        }

        $commentaire->delete();
        return response()->json(['message' => 'Commentaire supprimé avec succès']);
    }
}
