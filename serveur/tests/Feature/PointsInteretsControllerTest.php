<?php

namespace Tests\Feature;

use App\Models\PointsInterets;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PointsInteretsControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllPointsInterets()
    {
        $response = $this->get('/api/pointsinterets');
        $response->assertStatus(200);
        $response->assertJson(PointsInterets::all()->toArray());
    }

    public function testShowReturnsSpecificPointsInterets()
    {
        $pointsinteret = PointsInterets::factory()->create();
        $response = $this->get("/api/pointsinterets/{$pointsinteret->id}");
        $response->assertStatus(200);
        $response->assertJson($pointsinteret->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/pointsinterets/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewPointInteret()
    {
        $pointsinteretData = [
            'Type' => 'Test',
            'Nom' => 'Bjdksbf',
            'Id_lieu'=> 1,
        ];

        $response = $this->post('/api/pointsinterets', $pointsinteretData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('points_interets', $pointsinteretData);
    }

    public function testUpdateModifiesExistingPointsInterets()
    {
        $pointsinteret = PointsInterets::factory()->create();
        $updatedData = [
            'Type' => 'Test',
            'Nom' => 'Bjdksbf',
            'Id_lieu'=> 1,
        ];

        $response = $this->put("/api/pointsinterets/{$pointsinteret->id}", $updatedData);
        $response->assertStatus(200);
        $this->assertDatabaseHas('points_interets', $updatedData);
    }

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Type' => 'Test',
            'Nom' => 'Bjdksbf',
            'Id_lieu'=> 1,
        ];

        $response = $this->put('/api/pointsinterets/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesPointsInterets()
    {
        $pointsinteret = PointsInterets::factory()->create();
        $response = $this->delete("/api/pointsinterets/{$pointsinteret->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('points_interets', ['id' => $pointsinteret->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/pointsinterets/99999');
        $response->assertStatus(404);
    }
}
