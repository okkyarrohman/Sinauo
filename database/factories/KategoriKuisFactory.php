<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KategoriKuis>
 */
class KategoriKuisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kuis' => $this->faker->city(),
            'tenggat' => $this->faker->randomNumber(),
            'waktu' => $this->faker->randomNumber(),
        ];
    }
}
