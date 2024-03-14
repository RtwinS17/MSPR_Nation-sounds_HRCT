<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Artist;

class ArtistsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Tableau des artistes avec des données en dur
        $artists = [
            ['nom_groupe' => 'Royal Republic', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'Shakaponk', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Offspring', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Prodigy', 'type_musique' => 'Electro'],
            ['nom_groupe' => 'The Chemical Brothers', 'type_musique' => 'Electro'],
            ['nom_groupe' => 'The Glitch Mob', 'type_musique' => 'Electro'],
            ['nom_groupe' => 'The Bloody Beetroots', 'type_musique' => 'Electro'],
            ['nom_groupe' => 'The Subways', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Hives', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Strokes', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Raconteurs', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The White Stripes', 'type_musique' => 'Rock'],
            ['nom_groupe' => 'The Black Keys', 'type_musique' => 'Rock'],
            // Ajoutez ici les autres artistes que vous voulez insérer
        ];

        // Insérer chaque artiste dans la base de données
        foreach ($artists as $artistData) {
            Artist::create($artistData);
        }
    }
    }

