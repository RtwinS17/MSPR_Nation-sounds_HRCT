<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;

class ArtistController extends Controller
{
    public function index()
    {
        $artists = Artist::all();
        error_log($artists); // Ajoutez cette ligne pour vérifier si les artistes sont récupérés
        return response()->json($artists);
    }
}

