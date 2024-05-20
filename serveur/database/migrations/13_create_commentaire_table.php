<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('commentaire', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Id_user');
            $table->foreign('Id_user')->references('id')->on('users');
            $table->unsignedBigInteger('Id_concert');
            $table->foreign('Id_concert')->references('id')->on('concert');
            $table->text('Texte');
            $table->integer('Note');
            $table->dateTime('Date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('commentaire');
    }
};