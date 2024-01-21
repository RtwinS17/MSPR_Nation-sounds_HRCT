<?php

namespace Tests\Feature;

use App\Models\Utilisateur;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class UtilisateurControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllUtilisateurs()
    {
        $response = $this->get('/api/utilisateurs');
        $response->assertStatus(200);
        $response->assertJson(Utilisateur::all()->toArray());
    }

    public function testShowReturnsSpecificUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $response = $this->get("/api/utilisateurs/{$utilisateur->id}");
        $response->assertStatus(200);
        $response->assertJson($utilisateur->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/utilisateurs/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewUtilisateur()
    {
        $utilisateurData = [
            'name' => 'TestNom',
            'password' => 'Password',
            'email' => 'test@test.com',
            'email_verified_at' => now(),

        ];
    
        $response = $this->post('/api/utilisateurs', $utilisateurData);
        $response->assertStatus(201);
        unset($utilisateurData['Password']); 
        $this->assertDatabaseHas('utilisateurs', $utilisateurData);
    }
    

    public function testUpdateModifiesExistingUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $updatedData = [
            'name' => 'TestNom',
            'password' => 'Password',
            'email' => 'tester@test.com',
            'email_verified_at' => now(),
        ];
    
        $response = $this->put("/api/utilisateurs/{$utilisateur->id}", $updatedData);
        $response->assertStatus(200);
        unset($updatedData['Password']); 
        $this->assertDatabaseHas('utilisateurs', $updatedData);
    }
    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'name' => 'TestNom',
            'password' => 'Password',
            'email' => 'test@test.com',
            'email_verified_at' => now(),
        ];

        $response = $this->put('/api/utilisateurs/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $response = $this->delete("/api/utilisateurs/{$utilisateur->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('utilisateurs', ['id' => $utilisateur->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/utilisateurs/99999');
        $response->assertStatus(404);
    }
}
