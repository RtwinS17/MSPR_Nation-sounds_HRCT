<?php

namespace Tests\Feature;

use App\Models\Genre;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GenreTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateGenre()
    {
        $genreData = Genre::factory()->create([
            'Nom' => 'Rock',
            'Id_concert' => 1, 
            'Id_lieu' => 1 
        ]);

        $this->assertDatabaseHas('genre', ['Nom' => 'Rock']);
    }

    public function testReadGenre()
    {
        $genre = Genre::factory()->create();

        $found = Genre::find($genre->id);
        $this->assertNotNull($found);
    }

    public function testUpdateGenre()
    {
        $genre = Genre::factory()->create();
        $genre->update(['Nom' => 'Pop']);

        $this->assertEquals('Pop', $genre->fresh()->Nom);
    }

    public function testDeleteGenre()
    {
        $genre = Genre::factory()->create();
        $id = $genre->id;
        $genre->delete();

        $this->assertDatabaseMissing('genre', ['id' => $id]);
    }
}
