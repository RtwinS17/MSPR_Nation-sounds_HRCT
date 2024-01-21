<?php

namespace Tests\Feature;
use App\Models\Alerte;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AlerteTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function testCreateAlerte()
    {
        $alerte = Alerte::factory()->create([
            'Titre' => $this->faker->sentence,
            'Type' => $this->faker->word,
            'Texte' => $this->faker->paragraph,
        ]);

        $this->assertNotNull($alerte);
        $this->assertNotNull($alerte->id);
        $this->assertNotNull($alerte->Titre);
        $this->assertNotNull($alerte->Type);
        $this->assertNotNull($alerte->Texte);
    }

    public function testUpdatealerte()
    {
        // Créez une instance d'Alerte avec des valeurs initiales
        $alerte = Alerte::factory()->create();
    
        // Définissez les nouvelles valeurs pour la mise à jour
        $newTitre = 'Nouveau titre';
        $newType = 'Nouveau type';
        $newTexte = 'Nouveau texte';
        
        $alerte->update([
            'Titre' => $newTitre, 
            'Type' => $newType,   
            'Texte' => $newTexte, 
        ]);
    
        $alerte->refresh();
        
        $this->assertEquals($newTitre, $alerte->Titre);
        $this->assertEquals($newType, $alerte->Type);
        $this->assertEquals($newTexte, $alerte->Texte);
    }
    
    

    public function testDeletealerte()
    {
        $alerte = Alerte::factory()->create();

        $id = $alerte->id;
        $alerte->delete();

        $this->assertNull(Alerte::find($id));
    }
}
