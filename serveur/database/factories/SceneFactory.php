<?php

namespace Database\Factories;

use App\Models\Scene;
use Illuminate\Database\Eloquent\Factories\Factory;


class SceneFactory extends Factory
{
    protected $model = Scene::class;

    public function definition(): array
    {
        return [

            'Nom' => $this->faker->name,
            'Type' => $this->faker->name,
            'Id_lieu' => $this->faker->randomNumber(),

        ];
    }
}
