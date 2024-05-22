<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('alerte', function (Blueprint $table) {
            $table->id();
            $table->string('Titre', 191);
            $table->string('Type', 191);
            $table->text('Texte');
            $table->timestamps();
            $table->unsignedBigInteger('Id_user')->nullable();
            $table->foreign('Id_user')->references('id')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('alerte');
    }
};