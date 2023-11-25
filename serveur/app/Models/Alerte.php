<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Alerte
 * 
 * @property int $Id
 * @property string $Titre
 * @property string $Type
 * @property string $Texte
 *
 * @package App\Models
 */
class Alerte extends Model
{
	protected $table = 'alerte';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $fillable = [
		'Titre',
		'Type',
		'Texte'
	];
}
