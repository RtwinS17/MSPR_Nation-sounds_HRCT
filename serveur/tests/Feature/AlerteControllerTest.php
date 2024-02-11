<?php

namespace Tests\Feature;

use App\Models\Alerte;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AlerteControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllAlertes()
    {
        $response = $this->get('/api/alertes');
        $response->assertStatus(200);
        $response->assertJson(Alerte::all()->toArray());
    }

    public function testShowReturnsSpecificAlerte()
    {
        $alerte = Alerte::factory()->create();
        $response = $this->get("/api/alertes/{$alerte->id}");
        $response->assertStatus(200);
        $response->assertJson($alerte->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/alertes/invalid_id');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewAlerte()
    {
        $alerteData = [
            'Titre' => 'Test Titre',
            'Type' => 'Test Type',
            'Texte' => 'Test Texte',
        ];
        $response = $this->post('/api/alertes', $alerteData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('alerte', $alerteData);
    }

    public function testUpdateModifiesExistingAlerte()
    {
        $alerte = Alerte::factory()->create();
        $updatedData = [
            'Titre' => 'Updated Titre',
            'Type' => 'Updated Type',
            'Texte' => 'Updated Texte',
        ];
        $response = $this->put("/api/alertes/{$alerte->id}", $updatedData);
        $response->assertStatus(200);
        $this->assertDatabaseHas('alerte', $updatedData);
    }

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $response = $this->put('/api/alertes/invalid_id', []);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesAlerte()
    {
        $alerte = Alerte::factory()->create();
        $response = $this->delete("/api/alertes/{$alerte->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('alerte', ['id' => $alerte->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/alertes/invalid_id');
        $response->assertStatus(404);
    }
}

