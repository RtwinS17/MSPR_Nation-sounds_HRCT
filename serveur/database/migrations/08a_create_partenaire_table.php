<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('partenaire', function (Blueprint $table) {
            $table->id();
            $table->string('Catégories', 191);
            $table->string('Nom', 191);
            $table->unsignedBigInteger('Logo');
            $table->string('Url', 191);
            $table->timestamps();
            $table->unsignedBigInteger('Id_concert')->nullable();
            $table->foreign('Id_concert')->references('id')->on('concert');
        });
    }

    public function down()
    {
        Schema::dropIfExists('partenaire');
    }
};