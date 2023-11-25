<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Partenaire
 * 
 * @property int $id
 * @property string $Catégories
 * @property string $Nom
 * @property int $Logo
 * @property string $Url
 *
 * @package App\Models
 */
class Partenaire extends Model
{
	protected $table = 'partenaire';
	public $timestamps = false;

	protected $casts = [
		'Logo' => 'int'
	];

	protected $fillable = [
		'Catégories',
		'Nom',
		'Logo',
		'Url'
	];
}
