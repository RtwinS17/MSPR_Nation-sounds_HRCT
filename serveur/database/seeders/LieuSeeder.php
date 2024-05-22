<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Lieu;

class LieuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lieux = [
            [
                'latitude' => 48.856613,
                'longitude' => 2.352222,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'latitude' => 40.712776,
                'longitude' => -74.005974,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'latitude' => 34.052235,
                'longitude' => -118.243683,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Ajoute autant de lieux que nécessaire
        ];

        Lieu::insert($lieux);
    }
}
