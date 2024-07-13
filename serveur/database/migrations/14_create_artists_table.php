<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ModifyArtistsTable extends Migration
{
    public function up()
    {
        Schema::table('artists', function (Blueprint $table) {
            $table->text('description')->nullable(); // Ajoute une colonne pour la description
            $table->string('photo')->nullable(); // Ajoute une colonne pour la photo
        });
    }

    public function down()
    {
        Schema::table('artists', function (Blueprint $table) {
            $table->dropColumn('description'); // Supprime la colonne description si vous annulez la migration
            $table->dropColumn('photo'); // Supprime la colonne photo si vous annulez la migration
        });
    }
}