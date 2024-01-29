<?php

namespace Database\Factories;
use App\Models\Commentaire;


use Illuminate\Database\Eloquent\Factories\Factory;


class CommentaireFactory extends Factory
{
  
    protected $model = Commentaire::class;

    public function definition(): array
    {
        return [
            
            'Id_user' => $this->faker->randomNumber(),  
            'Id_concert' => $this->faker->randomNumber(),  
            'Texte' => $this->faker->paragraph,
            'Note' => $this->faker->numberBetween(1, 5), 
            'Date' => $this->faker->date

        ];
    }
}
