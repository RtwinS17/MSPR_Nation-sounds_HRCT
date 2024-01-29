<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Alerte
 * 
 * @property int $id
 * @property string $Titre
 * @property string $Type
 * @property string $Texte
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Alerte extends Model
{
	use HasFactory;
	protected $table = 'alerte';

	protected $fillable = [
		'Titre',
		'Type',
		'Texte'
	];
}
