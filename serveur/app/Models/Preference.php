<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Preference
 * 
 * @property int $Id
 * @property int $Id_user
 * @property string $Theme
 * @property string $Genre
 * @property string $Notification
 *
 * @package App\Models
 */
class Preference extends Model
{
	protected $table = 'preference';
	protected $primaryKey = 'Id';
	public $timestamps = false;

	protected $casts = [
		'Id_user' => 'int'
	];

	protected $fillable = [
		'Id_user',
		'Theme',
		'Genre',
		'Notification'
	];
}
