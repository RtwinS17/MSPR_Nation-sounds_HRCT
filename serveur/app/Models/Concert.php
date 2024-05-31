<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Concert
 * 
 * @property int $id
 * @property string $Groupe
 * @property string $Duree
 * @property string $Horaire
 * @property int $scene_id
 * @property string $Descriptif
 * 
 * @property Scene|null $scene
 *
 * @package App\Models
 */
class Concert extends Model
{
    protected $table = 'concert'; // Assurez-vous que le nom de table est correct
    protected $primaryKey = 'id'; // Assurez-vous que la clé primaire est correcte

    protected $casts = [
        'scene_id' => 'int'
    ];

    protected $fillable = [
        'Groupe',
        'Duree',
        'Horaire',
        'scene_id',
        'Descriptif'
    ];

    public function scene()
    {
        return $this->belongsTo(Scene::class, 'scene_id');
    }
}
