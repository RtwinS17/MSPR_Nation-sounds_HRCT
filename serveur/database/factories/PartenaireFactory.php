<?php

namespace Database\Factories;
use App\Models\Partenaire;
use Illuminate\Database\Eloquent\Factories\Factory;

class PartenaireFactory extends Factory
{
    protected $model = Partenaire::class;

    public function definition(): array
    {
        return [
            'Id_concert' => $this->faker->randomNumber(),
            'Catégories' => $this->faker->name,
            'Nom' => $this->faker->name,
            'Logo' => $this->faker->imageUrl(),
            'Url' => $this->faker->url,
        ];
    }
}
