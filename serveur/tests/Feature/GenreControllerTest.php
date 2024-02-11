<?php

namespace Tests\Feature;

use App\Models\Genre;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GenreControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllGenres()
    {
        $response = $this->get('/api/genres');
        $response->assertStatus(200);
        $response->assertJson(Genre::all()->toArray());
    }

    public function testShowReturnsSpecificConcert()
    {
        $genre = Genre::factory()->create();
        $response = $this->get("/api/genres/{$genre->id}");
        $response->assertStatus(200);
        $response->assertJson($genre->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/genres/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewGenre()
    {
        $genreData = [
            'Id_concert' => 2,
            'Nom' => 'Bjdksbf',
            'Id_lieu' => 2,
        ];

        $response = $this->post('/api/genres', $genreData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('genre', $genreData);
    }

    public function testUpdateModifiesExistingGenre()
{
    $genre = Genre::factory()->create();
    $updatedData = [
        'Id_concert' => 1,
        'Nom' => 'A',
        'Id_concert' => 1,
    ];

    $response = $this->put("/api/genres/{$genre->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('genre', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Id_concert' => 1,
             'Nom' => 'A',
              'Id_concert' => 1,

        ];

        $response = $this->put('/api/genres/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesConcert()
    {
        $genre = Genre::factory()->create();
        $response = $this->delete("/api/genres/{$genre->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('genre', ['id' => $genre->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/genres/99999');
        $response->assertStatus(404);
    }
}
