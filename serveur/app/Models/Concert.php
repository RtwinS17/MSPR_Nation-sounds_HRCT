<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Concert
 * 
 * @property int $id
 * @property string $Groupe
 * @property string $Duree // Nouvelle propriété
 * @property string $Horaire // Nouvelle propriété
 * @property int $scene_id // Nouvelle propriété : clé étrangère
 * @property string $Descriptif
 * @property int|null $Id_lieu
 * 
 * @property Scene|null $Id_scene // Relation avec le modèle Scene
 *
 * @package App\Models
 */
class Concert extends Model
{
	protected $table = 'concert';
	protected $primaryKey = 'ID';

	protected $casts = [
		'Horaires' => 'int',
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Groupe',
		'Duree',
		'Horaires',
		'scene_id',
		'Descriptif',
		'Id_lieu'
	];

    public function scene()
    {
        return $this->belongsTo(Scene::class, 'scene_id');
    }
}
