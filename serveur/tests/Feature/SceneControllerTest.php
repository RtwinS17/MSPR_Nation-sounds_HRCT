<?php

namespace Tests\Feature;

use App\Models\Scene;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SceneControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllScenes()
    {
        $response = $this->get('/api/scenes');
        $response->assertStatus(200);
        $response->assertJson(Scene::all()->toArray());
    }

    public function testShowReturnsSpecificScene()
    {
        $scene = Scene::factory()->create();
        $response = $this->get("/api/scenes/{$scene->id}");
        $response->assertStatus(200);
        $response->assertJson($scene->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/scenes/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewScene()
    {
        $sceneData = [
            'Nom' => 'ABC',
            'Type' => 'Concert',
            'Id_lieu' => 1,
        ];

        $response = $this->post('/api/scenes', $sceneData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('scene', $sceneData);
    }

    public function testUpdateModifiesExistingScene()
    {
        $scene = Scene::factory()->create();
        $updatedData = [
            'Nom' => 'DCF',
            'Type' => 'Pop',
            'Id_lieu' => 2,
        ];

        $response = $this->put("/api/scenes/{$scene->id}", $updatedData);
        $response->assertStatus(200);
        $this->assertDatabaseHas('scene', $updatedData);
    }

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Nom' => 'Updated Nom',
            'Type' => 'Updated Type',
            'Id_lieu' => 2,
        ];

        $response = $this->put('/api/scenes/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesScene()
    {
        $scene = Scene::factory()->create();
        $response = $this->delete("/api/scenes/{$scene->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('scene', ['id' => $scene->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/scenes/99999');
        $response->assertStatus(404);
    }
}
