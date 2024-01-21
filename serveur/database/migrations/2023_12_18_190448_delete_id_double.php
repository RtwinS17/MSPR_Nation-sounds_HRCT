<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
 public function up()
{
    Schema::table('alerte', function (Blueprint $table) {
        $table->dropColumn('Id_user');
    });
}



    public function down(): void
    {
        {
            Schema::table('alerte', function (Blueprint $table) {
                $table->unsignedBigInteger('Id_user')->nullable()->after('updated_at');
    
              
            });
        }
    }
};
