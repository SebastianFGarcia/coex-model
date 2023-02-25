<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Credito>
 */
class CreditoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pagare_nro' => $this->faker->randomNumber(8),
            'monto_credito' => $this->faker->randomFloat(2, 1000, 100000),
            'cuota_inicial' => $this->faker->randomFloat(2, 1000, 100000),
            'cuota_mensual' => $this->faker->randomFloat(2, 1000, 100000),
            'taza_interes' => $this->faker->randomFloat(2, 1, 100),
            'fecha_credito' => $this->faker->date(),
            'fecha_desembolso' => $this->faker->date(),
            'observaciones' => $this->faker->text(100),
            'cliente_id' => 1,
        ];
    }
}
