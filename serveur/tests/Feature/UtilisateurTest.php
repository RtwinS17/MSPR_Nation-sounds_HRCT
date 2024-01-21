<?php

namespace Tests\Feature;

use App\Models\Utilisateur;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UtilisateurTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateUtilisateur()
    {
        $userData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
        ];

        $utilisateur = Utilisateur::create($userData);
        $this->assertDatabaseHas('utilisateurs', ['email' => 'john@example.com']);
    }

    public function testReadUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $found = Utilisateur::find($utilisateur->id);

        $this->assertNotNull($found);
    }

    public function testUpdateUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $utilisateur->update(['name' => 'Jane Doe']);

        $this->assertEquals('Jane Doe', $utilisateur->fresh()->name);
    }

    public function testDeleteUtilisateur()
    {
        $utilisateur = Utilisateur::factory()->create();
        $id = $utilisateur->id;
        $utilisateur->delete();

        $this->assertDatabaseMissing('utilisateurs', ['id' => $id]);
    }
}
