<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Scene;

class SceneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $scenes = [
            [
                'Nom' => 'Main Stage',
                'Type' => 'Outdoor',
                'Id_lieu' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'Nom' => 'Second Stage',
                'Type' => 'Indoor',
                'Id_lieu' => 2,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'Nom' => 'Electronic Tent',
                'Type' => 'Tent',
                'Id_lieu' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Ajoute autant de scènes que nécessaire
        ];

        Scene::insert($scenes);
    }
}
