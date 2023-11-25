<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Concert
 * 
 * @property int $ID
 * @property string $Groupe
 * @property int $Horaires
 * @property string $Scene
 * @property string $Descriptif
 * 
 * @property Collection|Commentaire[] $commentaires
 * @property Collection|Genre[] $genres
 *
 * @package App\Models
 */
class Concert extends Model
{
	protected $table = 'concert';
	protected $primaryKey = 'ID';
	public $timestamps = false;

	protected $casts = [
		'Horaires' => 'int'
	];

	protected $fillable = [
		'Groupe',
		'Horaires',
		'Scene',
		'Descriptif'
	];

	public function commentaires()
	{
		return $this->hasMany(Commentaire::class, 'Id_concert');
	}

	public function genres()
	{
		return $this->hasMany(Genre::class, 'Id_concert');
	}
}
