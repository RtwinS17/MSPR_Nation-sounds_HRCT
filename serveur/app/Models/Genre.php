<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Genre
 * 
 * @property int $id
 * @property string $Nom
 * @property int $Id_concert
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $Id_lieu
 *
 * @package App\Models
 */
class Genre extends Model
{
	use HasFactory;
	protected $table = 'genre';

	protected $casts = [
		'Id_concert' => 'int',
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Nom',
		'Id_concert',
		'Id_lieu'
	];
	public function concert()
    {
        return $this->belongsTo(Concert::class, 'id_concert');
    }
}
