<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreferenceTable extends Migration
{
    public function up()
    {
        Schema::create('preference', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('Id_user')->nullable();
            $table->foreign('Id_user')->references('id')->on('utilisateurs');
            $table->string('Theme', 191);
            $table->string('Genre', 191);
            $table->string('Notification', 191);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('preference');
    }
}

