<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Commentaire
 * 
 * @property int $id
 * @property int $Id_user
 * @property int $Id_concert
 * @property string $Texte
 * @property int $Note
 * @property Carbon $Date
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Commentaire extends Model
{
	use HasFactory;
	protected $table = 'commentaire';

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
        return $this->belongsTo(Utilisateur::class, 'id_user');
    }

    public function concert()
    {
        return $this->belongsTo(Concert::class, 'id_concert');
    }
}

