<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $genres = [
            [
                'Nom' => 'Rock',
            ],
            [
                'Nom' => 'Electronic',
            ],
            [
                'Nom' => 'Pop',
            ],
            // Ajoute autant de genres que nécessaire
        ];

        Genre::insert($genres);
    }
}
