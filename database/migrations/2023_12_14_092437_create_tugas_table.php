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
            $table->string('nama')->nullable();
            $table->string('tenggat')->nullable();

            $table->string('step1')->nullable();
            $table->string('deskripsi1')->nullable();
            $table->string('answer1')->nullable();

            $table->string('step2')->nullable();
            $table->string('deskripsi2')->nullable();
            $table->string('answer2')->nullable();

            $table->string('step3')->nullable();
            $table->string('deskripsi3')->nullable();
            $table->string('answer3')->nullable();

            $table->string('step4')->nullable();
            $table->string('deskripsi4')->nullable();
            $table->string('answer4')->nullable();

            $table->string('konfirmasi')->nullable();
            $table->string('feedback')->nullable();

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
