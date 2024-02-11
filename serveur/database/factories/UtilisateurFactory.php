<?php
namespace Database\Factories;

use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UtilisateurFactory extends Factory
{
    protected $model = Utilisateur::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'password' => Hash::make('password'),
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
        ];
    }
}
