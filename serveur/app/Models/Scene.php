<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Scene
 * 
 * @property int $id
 * @property string $Nom
 * @property string $Type
 * @property int $Id_lieu
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Scene extends Model
{
	use HasFactory;
	protected $table = 'scene';

	protected $casts = [
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Nom',
		'Type',
		'Id_lieu'
	];
	
	public function lieu()
    {
        return $this->belongsTo(Lieu::class, 'id_lieu');
    }
}
