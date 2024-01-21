<?php

namespace Tests\Feature;

use App\Models\PointsInterets;
use App\Models\Lieu;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PointsInteretsTest extends TestCase
{
    use RefreshDatabase;

    public function testCreatePointsInterets()
    {
        $lieu = Lieu::factory()->create();
        $pointsInterets = PointsInterets::factory()->create(['Id_lieu' => $lieu->id]);

        $this->assertDatabaseHas('points_interets', ['id' => $pointsInterets->id]);
    }

    public function testReadPointsInterets()
    {
        $pointsInterets = PointsInterets::factory()->create();
        $found = PointsInterets::find($pointsInterets->id);

        $this->assertNotNull($found);
    }

    public function testUpdatePointsInterets()
    {
        $pointsInterets = PointsInterets::factory()->create();
        $newType = 'Nouveau Type';
        $pointsInterets->update(['Type' => $newType]);

        $this->assertEquals($newType, $pointsInterets->fresh()->Type);
    }

    public function testDeletePointsInterets()
    {
        $pointsInterets = PointsInterets::factory()->create();
        $id = $pointsInterets->id;
        $pointsInterets->delete();

        $this->assertDatabaseMissing('points_interets', ['id' => $id]);
    }
}
