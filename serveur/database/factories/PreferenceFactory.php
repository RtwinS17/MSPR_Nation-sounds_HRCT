<?php

namespace Database\Factories;
use App\Models\Preference;
use Illuminate\Database\Eloquent\Factories\Factory;


class PreferenceFactory extends Factory
{
    protected $model = Preference::class;

    public function definition(): array
    {
        return [
            
            'Theme' => $this->faker->word,
            'Genre' => $this->faker->word,
            'Notification' => $this->faker->word,
            'Id_user' => $this->faker->randomNumber(),

        ];
    }
}
