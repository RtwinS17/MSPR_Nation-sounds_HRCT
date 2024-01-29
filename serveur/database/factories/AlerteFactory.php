<?php

namespace Database\Factories;
use App\Models\Alerte;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alerte>
 */
class AlerteFactory extends Factory
{
    protected $model = Alerte::class;

    public function definition(): array
    {
        return [
            
            'Titre' => $this->faker->sentence,
            'Type' => $this->faker->word,
            'Texte' => $this->faker->paragraph,

        ];
    }
}


