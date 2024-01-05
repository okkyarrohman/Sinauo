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
        Schema::create('tugas', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('tenggat');

            $table->string('step1');
            $table->string('deskripsi1');
            $table->string('answer1');

            $table->string('step2');
            $table->string('deskripsi2');
            $table->string('answer2');

            $table->string('step3');
            $table->string('deskripsi3');
            $table->string('answer3');

            $table->string('step4');
            $table->string('deskripsi4');
            $table->string('answer4');

            $table->string('konfirmasi');
            $table->string('feedback');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas');
    }
};
