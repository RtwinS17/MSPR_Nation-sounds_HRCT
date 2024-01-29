<?php

namespace Database\Factories;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;


class GenreFactory extends Factory
{
    protected $model = Genre::class;

    public function definition(): array
    {
        return [
            
            'Id_concert' => $this->faker->randomNumber(),
            'Nom' => $this->faker->name,
            'Id_lieu' => $this->faker->randomNumber(),
            
        ];
    }
}
