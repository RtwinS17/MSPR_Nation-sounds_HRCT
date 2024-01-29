<?php

namespace Tests\Feature;

use App\Models\Concert;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ConcertControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllConcerts()
    {
        $response = $this->get('/api/concerts');
        $response->assertStatus(200);
        $response->assertJson(Concert::all()->toArray());
    }

    public function testShowReturnsSpecificConcert()
    {
        $concert = Concert::factory()->create();
        $response = $this->get("/api/concerts/{$concert->id}");
        $response->assertStatus(200);
        $response->assertJson($concert->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/concerts/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewConcert()
    {
        $concertData = [
            'Id_lieu' => 1,
            'Groupe' => 'Groupe A',
            'Horaires' => 18,
            'Scene' => 'Scene F',
            'Descriptif' => 'Concert scene F',
        ];

        $response = $this->post('/api/concerts', $concertData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('concert', $concertData);
    }

    public function testUpdateModifiesExistingConcert()
{
    $concert = Concert::factory()->create();
    $updatedData = [
        'Id_lieu' => 1,
        'Groupe' => 'Groupe A',
        'Horaires' => 18,
        'Scene' => 'Scene F',
        'Descriptif' => 'Concert scene F',
    ];

    $response = $this->put("/api/concerts/{$concert->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('concert', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Id_lieu' => 1,
            'Groupe' => 'Groupe A',
            'Horaires' => 18,
            'Scene' => 'Scene F',
            'Descriptif' => 'Concert scene F',

        ];

        $response = $this->put('/api/concerts/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesConcert()
    {
        $concert = Concert::factory()->create();
        $response = $this->delete("/api/concerts/{$concert->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('concert', ['id' => $concert->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/concerts/99999');
        $response->assertStatus(404);
    }
}
