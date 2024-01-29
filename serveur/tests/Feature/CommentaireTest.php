<?php

namespace Tests\Feature;

use App\Models\Commentaire;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentaireTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $this->assertDatabaseHas('commentaire', ['id' => $commentaire->id]);
    }

    public function testReadCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $found = Commentaire::find($commentaire->id);
        $this->assertNotNull($found);
    }

    public function testUpdateCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $commentaire->update(['Texte' => 'Texte modifié']);

        $this->assertEquals('Texte modifié', $commentaire->fresh()->Texte);
    }

    public function testDeleteCommentaire()
    {
        $commentaire = Commentaire::factory()->create();
        $id = $commentaire->id;
        $commentaire->delete();

        $this->assertDatabaseMissing('commentaire', ['id' => $id]);
    }
}
