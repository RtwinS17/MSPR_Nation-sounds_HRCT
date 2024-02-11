<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Commentaire;
use App\Models\Utilisateur;

class SqlInjectionTest extends TestCase
{
    use RefreshDatabase;

    public function testCommentairesSqlInjection()
    {
        $utilisateur = Utilisateur::factory()->create(); // Création d'un utilisateur de test

        $commentaire = Commentaire::factory()->create();

        $testCases = [
            "' OR '1'='1",
            "'; DROP TABLE commentaire; --",
            "'; UPDATE commentaire SET name = 'hacked' WHERE '1'='1'; --",
        ];

        foreach ($testCases as $testCase) {
            $response = $this->actingAs($utilisateur)->postJson('/api/commentaires', [
                'Id_utilisateur' => $utilisateur->id,
                'Id_concert' => 3,
                'Texte' => $testCase, // Ajoutez les injections SQL ici
                'Note' => 5, 
                'Date' => '2022-10-21',
            ]);

            $response->assertStatus(400);
            $response->assertDontSee('SQLSTATE'); // Vérifiez que la réponse ne contient pas d'erreur SQL
        }
    }
}
