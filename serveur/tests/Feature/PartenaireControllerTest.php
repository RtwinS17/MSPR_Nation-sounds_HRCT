<?php

namespace Tests\Feature;

use App\Models\Partenaire;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PartenaireControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndexReturnsAllPartenaires()
    {
        $response = $this->get('/api/partenaires');
        $response->assertStatus(200);
        $response->assertJson(Partenaire::all()->toArray());
    }

    public function testShowReturnsSpecificPartenaire()
    {
        $partenaire = Partenaire::factory()->create();
        $response = $this->get("/api/partenaires/{$partenaire->id}");
        $response->assertStatus(200);
        $response->assertJson($partenaire->toArray());
    }

    public function testShowReturnsNotFoundForInvalidId()
    {
        $response = $this->get('/api/partenaires/99999');
        $response->assertStatus(404);
    }

    public function testStoreCreatesNewPartenaire()
    {
        $partenaireData = [
            'Id_concert' => 123456789012345,
            'Catégories' => 'Bjdksbf',
            'Nom' => 'Bjdksbf',
            'Logo'=> 1,
            'Url'=> 'https://www.test.com',

        ];

        $response = $this->post('/api/partenaires', $partenaireData);
        $response->assertStatus(201);
        $this->assertDatabaseHas('partenaire', $partenaireData);
    }

    public function testUpdateModifiesExistingPartenaire()
{
    $partenaire = Partenaire::factory()->create();
    $updatedData = [
            'Id_concert' => 123456789012345,
            'Catégories' => 'Bjdksbf',
            'Nom' => 'Bjdksbf',
            'Logo'=> 1,
            'Url'=> 'https://www.test.com',

    ];

    $response = $this->put("/api/partenaires/{$partenaire->id}", $updatedData);
    $response->assertStatus(200);
    $this->assertDatabaseHas('partenaire', $updatedData);
   
}

    

    public function testUpdateReturnsNotFoundForInvalidId()
    {
        $updatedData = [
            'Id_concert' => 2,
            'Catégories' => 'Bjdksbf',
            'Nom' => 'Bjdksbf',
            'Logo'=> 1,
            'Url'=> 'https://www.test.com',

        ];

        $response = $this->put('/api/partenaires/99999', $updatedData);
        $response->assertStatus(404);
    }

    public function testDestroyDeletesConcert()
    {
        $partenaire = Partenaire::factory()->create();
        $response = $this->delete("/api/partenaires/{$partenaire->id}");
        $response->assertStatus(200);
        $this->assertDatabaseMissing('partenaire', ['id' => $partenaire->id]);
    }

    public function testDestroyReturnsNotFoundForInvalidId()
    {
        $response = $this->delete('/api/partenaires/99999');
        $response->assertStatus(404);
    }
}
