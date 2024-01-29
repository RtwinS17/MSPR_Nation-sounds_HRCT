<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenreTable extends Migration
{
    public function up()
    {
        Schema::create('genre', function (Blueprint $table) {
            $table->id();
            $table->string('Nom', 191);
            $table->unsignedBigInteger('Id_concert');
            $table->foreign('Id_concert')->references('id')->on('concert')->onDelete('cascade');
            $table->timestamps();
            $table->unsignedBigInteger('Id_lieu')->nullable();
            $table->foreign('Id_lieu')->references('id')->on('lieu');
        });
    }

    public function down()
    {
        Schema::dropIfExists('genre');
    }
}

