<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru = User::create([
            'name' => 'Guru',
            'email' => 'guru@sinauo.com',
            'password' => bcrypt('guru123'),
        ]);

        $guru = User::create([
            'name' => 'Rara Kirana Aisyah Anwar',
            'email' => 'rarakirana0130@gmail.com',
            'password' => bcrypt('rara123')
        ]);

        $guru = User::create([
            'name' => 'Ferdinan',
            'email' => 'ferdinansmkn6@gmail.com',
            'password' => bcrypt('ferdinan123')
        ]);
        $guru->assignRole('guru');

        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@sinauo.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');
    }
}
