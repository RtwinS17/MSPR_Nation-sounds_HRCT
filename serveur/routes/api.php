<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConcertController;

// Route pour récupérer tous les concerts
Route::get('/concerts', [ConcertController::class, 'index']);

// Route pour créer un nouveau concert
Route::post('/concerts', [ConcertController::class, 'store']);

// Route pour récupérer un concert par son ID
Route::get('/concerts/{id}', [ConcertController::class, 'show']);

// Route pour mettre à jour un concert existant
Route::put('/concerts/{id}', [ConcertController::class, 'update']);

// Route pour supprimer un concert existant
Route::delete('/concerts/{id}', [ConcertController::class, 'destroy']);

// Autres routes...

