<?php

namespace Tests\Feature;

use App\Models\Preference;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PreferenceControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllPreferences()
    {
        $response = $this->get('/api/preferences');
        $response->assertStatus(200);
        $response->assertJson(Preference::all()->toArray());
    }

    public function testShowReturnsSpecificPreference()
    {
        $preference = Preference::factory()->create();
        $response = $this->get("/api/preferences/{$preference->id}");
        $response->assertStatus(200);
        $response->assertJson($preference->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/preferences/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewPreference()
    {
        $preferenceData = [
            'Theme' => 'Musique',
            'Genre' => 'Pop',
            'Notification' => 'Hi',
            'Id_user' => 1,

        ];

        $response = $this->post('/api/preferences', $preferenceData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('preference', $preferenceData);
    }

    public function testUpdateModifiesExistingPreference()
{
    $preference = Preference::factory()->create();
    $updatedData = [
        'Theme' => 'Musique',
        'Genre' => 'Pop',
        'Notification' => 'Hi',
        'Id_user' => 1,


    ];

    $response = $this->put("/api/preferences/{$preference->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('preference', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Theme' => 'Musique',
            'Genre' => 'Pop',
            'Notification' => 'Hi',
            'Id_user' => 1,


        ];

        $response = $this->put('/api/preferences/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesConcert()
    {
        $preference = Preference::factory()->create();
        $response = $this->delete("/api/preferences/{$preference->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('preference', ['id' => $preference->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/preferences/99999');
        $response->assertStatus(404);
    }
}
