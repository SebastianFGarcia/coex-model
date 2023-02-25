<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $fillable = [
        'nit',
        'nombre',
        'apellidos',
        'direccion',
        'ciudad',
        'telefono',
        'estado',
        'cupo_total',
        'cupo_disponible',
        'dias_gracia',
    ];

    public function creditos()
    {
        return $this->hasMany(Credito::class);
    }
}
