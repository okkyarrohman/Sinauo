<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tugas_results', function (Blueprint $table) {
            $table->string('date_step1')->after('answer4')->nullable();
            $table->string('date_step2')->after('date_step1')->nullable();
            $table->string('date_step3')->after('date_step2')->nullable();
            $table->string('date_step4')->after('date_step3')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tugas_results', function (Blueprint $table) {
            $table->dropColumn('date_step1');
            $table->dropColumn('date_step2');
            $table->dropColumn('date_step3');
            $table->dropColumn('date_step4');
        });
    }
};
