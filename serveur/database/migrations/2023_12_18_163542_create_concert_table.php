<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConcertTable extends Migration
{
    public function up()
    {
        Schema::create('concert', function (Blueprint $table) {
            $table->id();
            $table->string('Groupe', 191);
            $table->integer('Horaires');
            $table->string('Scene', 191);
            $table->text('Descriptif');
            $table->timestamps();
            $table->unsignedBigInteger('Id_lieu')->nullable();
            $table->foreign('Id_lieu')->references('id')->on('lieu');
        });
    }

    public function down()
    {
        Schema::dropIfExists('concert');
    }
}

