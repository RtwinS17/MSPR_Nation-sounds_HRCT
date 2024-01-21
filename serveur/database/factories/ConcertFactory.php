<?php

namespace Database\Factories;

use App\Models\Concert;
use Illuminate\Database\Eloquent\Factories\Factory;


class ConcertFactory extends Factory
{
    protected $model = Concert::class;

    public function definition(): array
    {
        return [
            
            'Id_lieu' => $this->faker->randomNumber(),
            'Groupe' => $this->faker->sentence,
            'Horaires' => $this->faker->randomNumber(),
            'Scene' => $this->faker->sentence,
            'Descriptif' => $this->faker->paragraph,

        ];
    }
}
