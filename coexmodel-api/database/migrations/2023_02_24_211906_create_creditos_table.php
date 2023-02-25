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
        Schema::create('creditos', function (Blueprint $table) {
            $table->id();
            $table->string('pagare_nro');
            $table->string('monto_credito');
            $table->string('cuota_inicial');
            $table->string('cuota_mensual');
            $table->string('taza_interes');
            $table->date('fecha_credito');
            $table->date('fecha_desembolso');
            $table->text('observaciones')->nullable();
            $table->foreignId('cliente_id')->constrained('clientes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creditos');
    }
};
