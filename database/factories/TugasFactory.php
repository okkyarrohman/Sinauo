<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tugas>
 */
class TugasFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->name(),
            'tenggat' => $this->faker->date(),
            'step1' => $this->faker->sentence(),
            'deskripsi1' => $this->faker->sentence(),
            'step2' => $this->faker->sentence(),
            'deskripsi2' => $this->faker->sentence(),
            'step3' => $this->faker->sentence(),
            'deskripsi3' => $this->faker->sentence(),
            'step4' => $this->faker->sentence(),
            'deskripsi4' => $this->faker->sentence(),
        ];
    }
}
