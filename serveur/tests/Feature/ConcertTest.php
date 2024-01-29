<?php

namespace Tests\Feature;

use App\Models\Concert;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ConcertTest extends TestCase
{
    use RefreshDatabase;

    public function testCreateConcert()
    {
        $concert = Concert::factory()->create();
        $this->assertDatabaseHas('concert', ['id' => $concert->id]);
    }

    public function testReadConcert()
    {
        $concert = Concert::factory()->create();
        $found = Concert::find($concert->id);
        $this->assertNotNull($found);
    }

    public function testUpdateConcert()
    {
        $concert = Concert::factory()->create();
        $concert->update(['Groupe' => 'Nouveau Groupe']);

        $this->assertEquals('Nouveau Groupe', $concert->fresh()->Groupe);
    }

    public function testDeleteConcert()
    {
        $concert = Concert::factory()->create();
        $id = $concert->id;
        $concert->delete();

        $this->assertDatabaseMissing('concert', ['id' => $id]);
    }
}

