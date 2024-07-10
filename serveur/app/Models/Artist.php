<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    protected $table = 'artists'; // Assurez-vous que c'est le nom correct de la table

    protected $fillable = [
        'nom_groupe',
        'type_musique',
        'photo',
        'description',
    ];
}
