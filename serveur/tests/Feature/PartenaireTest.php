<?php

namespace Tests\Feature;

use App\Models\Partenaire;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PartenaireTest extends TestCase
{
    use RefreshDatabase;

    public function testCreatePartenaire()
    {
        $partenaireData = Partenaire::factory()->create([
            'Nom' => 'Partenaire 1',
            'Catégories' => 'Catégorie A',
            'Logo' => 123, // Assurez-vous que cette valeur est appropriée
            'Url' => 'https://partenaire.com',
            'Id_concert' => 1 // Assurez-vous que cet ID existe ou créez un concert avec une factory
        ]);

        $this->assertDatabaseHas('partenaire', ['Nom' => 'Partenaire 1']);
    }

    public function testReadPartenaire()
    {
        $partenaire = Partenaire::factory()->create();

        $found = Partenaire::find($partenaire->id);
        $this->assertNotNull($found);
    }

    public function testUpdatePartenaire()
    {
        $partenaire = Partenaire::factory()->create();
        $partenaire->update(['Nom' => 'Partenaire 2']);

        $this->assertEquals('Partenaire 2', $partenaire->fresh()->Nom);
    }

    public function testDeletePartenaire()
    {
        $partenaire = Partenaire::factory()->create();
        $id = $partenaire->id;
        $partenaire->delete();

        $this->assertDatabaseMissing('partenaire', ['id' => $id]);
    }
}

