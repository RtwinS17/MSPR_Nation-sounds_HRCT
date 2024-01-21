<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AlerteController;
use App\Http\Controllers\CommentaireController;
use App\Http\Controllers\ConcertController;
use App\Http\Controllers\GenreController;
use App\Http\Controllers\LieuController;
use App\Http\Controllers\PartenaireController;
use App\Http\Controllers\PointsInteretsController;
use App\Http\Controllers\PreferenceController;
use App\Http\Controllers\SceneController;
use App\Http\Controllers\UtilisateurController;
use App\Http\Controllers\WordpressController;
use App\Http\Controllers\GeolocationController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;


//Routes pour les contrôlleurs
Route::resources([
    'alertes'=> AlerteController::class,
    'commentaires' => CommentaireController::class,
    'concerts' => ConcertController::class,
    'genres' => GenreController::class,
    'lieux' => LieuController::class,
    'partenaires' => PartenaireController::class,
    'pointsinterets' => PointsInteretsController::class,
    'preferences' => PreferenceController::class,
    'scenes' => SceneController::class,
    'utilisateurs' => UtilisateurController::class,
    'geo' => GeolocationController::class,
    
]);

// Routes d'authentification
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout']);

//Route pour le contrôleur Wordpress

Route::prefix('wordpress')->group(function () {
    Route::get('/posts', 'WordPressController@getPosts');
    Route::get('/programs', 'WordPressController@getPrograms'); // Ajoutez cette ligne pour les programmes
    Route::get('/alerts', 'WordPressController@getAlerts');     // Ajoutez cette ligne pour les alertes
});




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


