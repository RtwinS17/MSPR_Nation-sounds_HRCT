<?php

namespace Tests\Feature;

use App\Models\Preference;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PreferenceTest extends TestCase
{
    use RefreshDatabase;

    public function testCreatePreference()
    {
        $preference = Preference::factory()->create();
        $this->assertDatabaseHas('preference', ['id' => $preference->id]);
    }

    public function testReadPreference()
    {
        $preference = Preference::factory()->create();
        $found = Preference::find($preference->id);

        $this->assertNotNull($found);
    }

    public function testUpdatePreference()
    {
        $preference = Preference::factory()->create();
        $newTheme = 'Nouveau Thème';
        $preference->update(['Theme' => $newTheme]);

        $this->assertEquals($newTheme, $preference->fresh()->Theme);
    }

    public function testDeletePreference()
    {
        $preference = Preference::factory()->create();
        $id = $preference->id;
        $preference->delete();

        $this->assertDatabaseMissing('preference', ['id' => $id]);
    }
}

