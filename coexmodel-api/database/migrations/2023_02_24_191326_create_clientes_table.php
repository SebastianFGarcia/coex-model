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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nit', 20)->unique();
            $table->string('nombre', 100);
            $table->string('apellidos', 100);
            $table->string('direccion', 100);
            $table->string('ciudad', 100);
            $table->string('telefono', 100);
            $table->string('estado', 100);
            $table->string('cupo_total', 100);
            $table->string('cupo_disponible', 100);
            $table->string('dias_gracia', 100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
