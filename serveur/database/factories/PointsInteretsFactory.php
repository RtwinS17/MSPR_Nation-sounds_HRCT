<?php

namespace Database\Factories;

use App\Models\PointsInterets;
use App\Models\Lieu;
use Illuminate\Database\Eloquent\Factories\Factory;

class PointsInteretsFactory extends Factory
{
    protected $model = PointsInterets::class;

    public function definition()
    {
        return [
            'Type' => $this->faker->name,
            'Nom' => $this->faker->name,
            'Id_lieu'=> $this->faker->randomNumber(),
        ];
    }
}
