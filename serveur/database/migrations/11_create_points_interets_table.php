<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('points_interets', function (Blueprint $table) {
            $table->id();
            $table->string('Type', 191);
            $table->string('Nom', 191);
            $table->unsignedBigInteger('Id_lieu');
            $table->foreign('Id_lieu')->references('id')->on('lieu');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('points_interets');
    }
};