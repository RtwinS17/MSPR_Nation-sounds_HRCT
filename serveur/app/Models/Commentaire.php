<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Commentaire
 * 
 * @property int $Id
 * @property int $Id_user
 * @property int $Id_concert
 * @property string $Texte
 * @property int $Note
 * @property Carbon $Date
 * 
 * @property Utilisateur $utilisateur
 * @property Concert $concert
 *
 * @package App\Models
 */
class Commentaire extends Model
{
	protected $table = 'commentaire';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $casts = [
		'Id_user' => 'int',
		'Id_concert' => 'int',
		'Note' => 'int',
		'Date' => 'datetime'
	];

	protected $fillable = [
		'Id_user',
		'Id_concert',
		'Texte',
		'Note',
		'Date'
	];

	public function utilisateur()
	{
		return $this->belongsTo(Utilisateur::class, 'Id_user');
	}

	public function concert()
	{
		return $this->belongsTo(Concert::class, 'Id_concert');
	}
}
