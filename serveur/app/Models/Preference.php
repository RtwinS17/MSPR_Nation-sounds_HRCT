<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Preference
 * 
 * @property int $id
 * @property int|null $Id_user
 * @property string $Theme
 * @property string $Genre
 * @property string $Notification
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Preference extends Model
{
	use HasFactory;
	protected $table = 'preference';

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
