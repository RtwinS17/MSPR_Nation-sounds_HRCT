<?php

namespace Database\Factories;
use App\Models\Lieu;
use Illuminate\Database\Eloquent\Factories\Factory;


class LieuFactory extends Factory
{
    protected $model = Lieu::class;

    public function definition(): array
    {
        return [
            
            'latitude' => $this->faker->latitude,
            'longitude' => $this->faker->longitude,

        ];
    }
}
