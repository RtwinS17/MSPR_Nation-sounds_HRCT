<?php

namespace Tests\Feature;

use App\Models\Scene;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SceneTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateScene()
    {
        $scene = Scene::factory()->create();
        $this->assertDatabaseHas('scene', ['id' => $scene->id]);
    }

    public function testReadScene()
    {
        $scene = Scene::factory()->create();
        $found = Scene::find($scene->id);

        $this->assertNotNull($found);
    }

    public function testUpdateScene()
    {
        $scene = Scene::factory()->create();
        $newNom = 'Nouveau Nom';
        $scene->update(['Nom' => $newNom]);

        $this->assertEquals($newNom, $scene->fresh()->Nom);
    }

    public function testDeleteScene()
    {
        $scene = Scene::factory()->create();
        $id = $scene->id;
        $scene->delete();

        $this->assertDatabaseMissing('scene', ['id' => $id]);
    }
}
