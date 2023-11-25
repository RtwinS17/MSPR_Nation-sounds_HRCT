<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class PointsInterest
 * 
 * @property int $Id
 * @property string $Type
 * @property string $Nom
 * @property int $Id_lieu
 *
 * @package App\Models
 */
class PointsInterest extends Model
{
	protected $table = 'points_interest';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $casts = [
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Type',
		'Nom',
		'Id_lieu'
	];
}
