<?php

namespace Tests\Feature;
use App\Models\Utilisateur;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class LoginControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_login_with_valid_credentials()
    {
        $password = $this->faker->password(8);
        $user = Utilisateur::factory()->create([
            'password' => Hash::make($password),
        ]);

        $response = $this->json('POST', '/api/login', [
            'email' => $user->email,
            'password' => $password,
        ]);

        $response->assertStatus(200)
            ->assertJsonStructure(['access_token', 'token_type']);
    }

    public function test_logout_user()
    {
        $user = Utilisateur::factory()->create();
        Sanctum::actingAs($user);
    
        $response = $this->json('POST', '/api/logout');
    
        $response->assertStatus(200)
            ->assertJson(['message' => 'Déconnexion réussie.']);
    }
    
}
