<?php

namespace Tests\Feature;

use App\Models\Commentaire;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentaireControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllCommentaires()
    {
        $response = $this->get('/api/commentaires');
        $response->assertStatus(200);
        $response->assertJson(Commentaire::all()->toArray());
    }

    public function testShowReturnsSpecificCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $response = $this->get("/api/commentaires/{$commentaire->id}");
        $response->assertStatus(200);
        $response->assertJson($commentaire->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/commentaires/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewCommentaire()
    {
        $commentaireData = [
            'Id_user' => 1, 
            'Id_concert' => 1, 
            'Texte' => 'Nouveau commentaire',
            'Note' => 5,
            'Date' => '2021-01-01',
        ];

        $response = $this->post('/api/commentaires', $commentaireData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('commentaire', $commentaireData);
    }

    public function testUpdateModifiesExistingCommentaire()
{
    $commentaire = Commentaire::factory()->create();
    $updatedData = [
        'Id_user' => 1,
        'Id_concert' => 1,
        'Texte' => 'Commentaire modifié',
        'Note' => 4,
        'Date' => '2021-01-11 12:00:00',
    ];

    $response = $this->put("/api/commentaires/{$commentaire->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('commentaire', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Id_user' => 1,
            'Id_concert' => 1,
            'Texte' => 'Commentaire modifié',
            'Note' => 4,
            'Date' => '2021-01-02',
        ];

        $response = $this->put('/api/commentaires/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $response = $this->delete("/api/commentaires/{$commentaire->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('commentaire', ['id' => $commentaire->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/commentaires/99999');
        $response->assertStatus(404);
    }
}
