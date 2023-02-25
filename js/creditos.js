let creditos;
const host = 'http://localhost:8000';
const cargarCreditos = async () => {
    creditos = await fetch(`${host}/api/creditos/`).then(res => res.json());
    displayCreditos(creditos);
}

cargarCreditos();

async function displayCreditos(creditos) {
    const tbody = document.getElementById('tbody');
    tbody.textContent = '';
    creditos.forEach(credito => {
        const tr = document.createElement('tr');
        const tdCliente = document.createElement('td');
        const tdMonto = document.createElement('td');
        const tdCuotaIni = document.createElement('td');
        const tdCuotaMen = document.createElement('td');
        const tdInteres = document.createElement('td');
        const tdFecha = document.createElement('td');
        const tdAcciones = document.createElement('td');
        const btnEditar = document.createElement('a');
        const btnEliminar = document.createElement('a');
        

        tdCliente.textContent = credito.cliente.nombre;
        tdMonto.textContent = credito.monto_credito;
        tdCuotaIni.textContent = credito.cuota_inicial;
        tdCuotaMen.textContent = credito.cuota_mensual;
        tdInteres.textContent = credito.taza_interes;
        tdFecha.textContent = credito.fecha_credito;

        btnEditar.innerHTML = 'Editar';
        btnEditar.classList.add('btn', 'btn-sm');
        btnEditar.href = `editarCredito.html?id=${credito.id}`;
        btnEliminar.innerHTML = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-sm', 'ms-1');
        btnEliminar.onclick = async () => {
            const res = await fetch(`${host}/api/creditos/${credito.id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                cargarCreditos();
            }
        };
        
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);
        tr.appendChild(tdCliente);
        tr.appendChild(tdMonto);
        tr.appendChild(tdCuotaIni);
        tr.appendChild(tdCuotaMen);
        tr.appendChild(tdInteres);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    });
}

const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCreditos = creditos.filter(credito => {
        return credito.cliente.nombre.toLowerCase().includes(searchString);
    });
    displayCreditos(filteredCreditos);
});