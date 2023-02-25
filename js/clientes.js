let clientes;
const host = 'http://localhost:8000';
const cargarClientes = async () => {
    clientes = await fetch(`${host}/api/clientes/`).then(res => res.json());
    displayClientes(clientes);
}

cargarClientes();

async function displayClientes(clientes) {
    const tbody = document.getElementById('tbody');
    tbody.textContent = '';
    clientes.forEach(cliente => {
        const tr = document.createElement('tr');
        const tdNombre = document.createElement('td');
        const tdApellidos = document.createElement('td');
        const tdNit = document.createElement('td');
        const tdDireccion = document.createElement('td');
        const tdCiudad = document.createElement('td');
        const tdTelefono = document.createElement('td');
        const tdCupo = document.createElement('td');
        const tdEstado = document.createElement('td');
        const tdAcciones = document.createElement('td');
        const btnEditar = document.createElement('a');
        const btnEliminar = document.createElement('a');

        tdNombre.textContent = cliente.nombre;
        tdApellidos.textContent = cliente.apellidos;
        tdNit.textContent = cliente.nit;
        tdDireccion.textContent = cliente.direccion;
        tdCiudad.textContent = cliente.ciudad;
        tdTelefono.textContent = cliente.telefono;
        tdCupo.textContent = cliente.cupo_disponible;
        tdEstado.textContent = cliente.estado;
        
        btnEditar.innerHTML = 'Editar';
        btnEditar.classList.add('btn', 'btn-sm');
        btnEditar.href = `editarCliente.html?id=${cliente.id}`;
        btnEliminar.innerHTML = 'Eliminar';
        btnEliminar.classList.add('btn', 'btn-sm', 'ms-1');
        btnEliminar.onclick = async () => {
            const res = await fetch(`${host}/api/clientes/${cliente.id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                cargarClientes();
            }
        };
        
        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellidos);
        tr.appendChild(tdNit);
        tr.appendChild(tdDireccion);
        tr.appendChild(tdCiudad);
        tr.appendChild(tdTelefono);
        tr.appendChild(tdCupo);
        tr.appendChild(tdEstado);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    });
}

const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredClientes = clientes.filter((cliente) => {
        return (
            cliente.nombre.toLowerCase().includes(searchString) ||
            cliente.nit.toLowerCase().includes(searchString)
        );
    });
    displayClientes(filteredClientes);
});


