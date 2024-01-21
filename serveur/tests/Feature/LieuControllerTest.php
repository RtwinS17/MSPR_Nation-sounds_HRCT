<?php

namespace Tests\Feature;

use App\Models\Lieu;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LieuControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllGenres()
    {
        $response = $this->get('/api/lieux');
        $response->assertStatus(200);
        $response->assertJson(Lieu::all()->toArray());
    }

    public function testShowReturnsSpecificLieu()
    {
        $lieu = Lieu::factory()->create();
        $response = $this->get("/api/lieux/{$lieu->id}");
        $response->assertStatus(200);
        $response->assertJson($lieu->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/lieux/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewLieu()
    {
        $lieuData = [
            'latitude' => 10,
            'longitude' => 11,
        ];

        $response = $this->post('/api/lieux', $lieuData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('lieu', $lieuData);
    }

    public function testUpdateModifiesExistingLieu()
{
    $lieu = Lieu::factory()->create();
    $updatedData = [
        'latitude' => 10,
        'longitude' => 11,
    ];

    $response = $this->put("/api/lieux/{$lieu->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('lieu', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'latitude' => 10,
            'longitude' => 11,

        ];

        $response = $this->put('/api/lieux/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesLieu()
    {
        $lieu = Lieu::factory()->create();
        $response = $this->delete("/api/lieux/{$lieu->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('lieu', ['id' => $lieu->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/lieux/99999');
        $response->assertStatus(404);
    }
}
