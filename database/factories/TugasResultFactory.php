<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Tugas;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TugasResult>
 */
class TugasResultFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => function () {
                return User::inRandomOrder()->first();
            },
            'tugas_id' => function () {
                return Tugas::inRandomOrder()->first();
            },
            'answer1' => $this->faker->sentence(),
            'answer2' => $this->faker->url(),
            'answer3' => $this->faker->url(),
            'answer4' => $this->faker->url(),
            'konfirmasi' => $this->faker->randomElement(['Tolak', 'Terima']),
            'feedback' => $this->faker->sentence(),
        ];
    }
}
