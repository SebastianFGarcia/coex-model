<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cliente>
 */
class ClienteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        /* nit
nombre
apellidos
direccion
ciudad
telefono
estado
cupo_total
cupo_disponible number
dias_gracia number */
        return [
            'nit' => $this->faker->unique()->word,
            'nombre' => $this->faker->name,
            'apellidos' => $this->faker->lastName,
            'direccion' => $this->faker->address,
            'ciudad' => $this->faker->city,
            'telefono' => $this->faker->phoneNumber,
            'estado' => 'Activo',
            'cupo_total' => $this->faker->randomDigit(),
            'cupo_disponible' => $this->faker->randomDigit(),
            'dias_gracia' => $this->faker->randomDigit(),
        ];
    }
}
