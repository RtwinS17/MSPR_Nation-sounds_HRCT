<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Concert
 * 
 * @property int $id
 * @property string $Groupe
 * @property int $Horaires
 * @property string $Scene
 * @property string $Descriptif
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property int|null $Id_lieu
 *
 * @package App\Models
 */
class Concert extends Model
{
	use HasFactory;
	protected $table = 'concert';

	protected $casts = [
		'Horaires' => 'int',
		'Id_lieu' => 'int'
	];

	protected $fillable = [
		'Groupe',
		'Horaires',
		'Scene',
		'Descriptif',
		'Id_lieu'
	];

	public function genres()
    {
        return $this->hasMany(Genre::class, 'id_concert');
    }

    public function commentaires()
    {
        return $this->hasMany(Commentaire::class, 'id_concert');
    }
}
