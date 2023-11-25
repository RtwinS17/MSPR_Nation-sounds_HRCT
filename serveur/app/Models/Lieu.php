<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Lieu
 * 
 * @property int $Id
 * @property string $Localisation_GPS
 *
 * @package App\Models
 */
class Lieu extends Model
{
	protected $table = 'lieu';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $fillable = [
		'Localisation_GPS'
	];
}
