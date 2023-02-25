<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Credito extends Model
{
    use HasFactory;

    protected $fillable = [
        'pagare_nro',
        'monto_credito',
        'cuota_inicial',
        'cuota_mensual',
        'taza_interes',
        'fecha_credito',
        'fecha_desembolso',
        'observaciones',
        'cliente_id',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
