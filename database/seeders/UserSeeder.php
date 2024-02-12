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
        $guru1 = User::create([
            'name' => 'Guru',
            'email' => 'guru@sinauo.com',
            'password' => bcrypt('guru123'),
        ]);

        $guru2 = User::create([
            'name' => 'Rara Kirana Aisyah Anwar',
            'email' => 'rarakirana0130@gmail.com',
            'password' => bcrypt('rara123')
        ]);

        $guru3 = User::create([
            'name' => 'Ferdinan',
            'email' => 'ferdinansmkn6@gmail.com',
            'password' => bcrypt('ferdinan123')
        ]);
        $guru1->assignRole('guru');
        $guru2->assignRole('guru');
        $guru3->assignRole('guru');

        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@sinauo.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');
    }
}
