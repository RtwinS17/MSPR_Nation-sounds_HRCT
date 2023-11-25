<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Genre
 * 
 * @property int $Id
 * @property string $Nom
 * @property int $Id_concert
 * 
 * @property Concert $concert
 *
 * @package App\Models
 */
class Genre extends Model
{
	protected $table = 'genre';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $casts = [
		'Id_concert' => 'int'
	];

	protected $fillable = [
		'Nom',
		'Id_concert'
	];

	public function concert()
	{
		return $this->belongsTo(Concert::class, 'Id_concert');
	}
}
