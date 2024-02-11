<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Lieu
 * 
 * @property int $id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property float|null $latitude
 * @property float|null $longitude
 *
 * @package App\Models
 */
class Lieu extends Model
{
	use HasFactory;
	protected $table = 'lieu';

	protected $casts = [
		'latitude' => 'float',
		'longitude' => 'float'
	];

	protected $fillable = [
		'latitude',
		'longitude'
	];
}
