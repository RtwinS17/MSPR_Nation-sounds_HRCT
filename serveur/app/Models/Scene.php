<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Scene
 * 
 * @property int $Id
 * @property string $Nom
 * @property string $Type
 * @property int $Id_lieu
 *
 * @package App\Models
 */
class Scene extends Model
{
	protected $table = 'scene';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $casts = [
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Nom',
		'Type',
		'Id_lieu'
	];
}
