<?php

namespace Tests\Feature;

use App\Models\Lieu;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LieuTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateLieu()
    {
        $lieuData = Lieu::factory()->create([
            'latitude' => 48.8566,
            'longitude' => 2.3522
        ]);

        $this->assertDatabaseHas('lieu', ['latitude' => 48.8566]);
    }

    public function testReadLieu()
    {
        $lieu = Lieu::factory()->create();

        $found = Lieu::find($lieu->id);
        $this->assertNotNull($found);
    }

    public function testUpdateLieu()
    {
        $lieu = Lieu::factory()->create();
        $lieu->update(['latitude' => 40.7128]);

        $this->assertEquals(40.7128, $lieu->fresh()->latitude);
    }

    public function testDeleteLieu()
    {
        $lieu = Lieu::factory()->create();
        $id = $lieu->id;
        $lieu->delete();

        $this->assertDatabaseMissing('lieu', ['id' => $id]);
    }
}
