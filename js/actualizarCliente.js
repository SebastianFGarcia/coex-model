const id = new URLSearchParams(window.location.search).get('id');

const nit = document.getElementById('nit')
const nombre = document.getElementById('nombre')
const apellidos = document.getElementById('apellidos')
const direccion = document.getElementById('direccion')
const ciudad = document.getElementById('ciudad')
const telefono = document.getElementById('telefono')
const estado = document.getElementById('estado')
const cupo_total = document.getElementById('cupo_total')
const cupo_disponible = document.getElementById('cupo_disponible')
const dias_gracia = document.getElementById('dias_gracia')

const host = 'http://localhost:8000';
const cliente = async () => {
    const res = await fetch(`${host}/api/clientes/${id}`);
    const cliente = await res.json();
    nit.value = cliente.nit;
    nombre.value = cliente.nombre;
    apellidos.value = cliente.apellidos;
    direccion.value = cliente.direccion;
    ciudad.value = cliente.ciudad;
    telefono.value = cliente.telefono;
    estado.value = cliente.estado;
    cupo_total.value = cliente.cupo_total;
    cupo_disponible.value = cliente.cupo_disponible;
    dias_gracia.value = cliente.dias_gracia;
    return cliente;
}
cliente();

async function actualizarCliente(cliente) {
    console.log(cliente);
    const url = `${host}/api/clientes/${id}`;
    await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = 'clientes.html';
        }).catch(error => {
            console.error('Error:', error);
        });
}


const forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }else{
        event.preventDefault();
        event.stopPropagation();
        const cliente = getValues();
        actualizarCliente(cliente);  
    }
    form.classList.add('was-validated');
    event.preventDefault();
    

  }, false)
})


function getValues() {
    const cliente = {
        nit: nit.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        direccion: direccion.value,
        ciudad: ciudad.value,
        telefono: telefono.value,
        estado: estado.value,
        cupo_total: cupo_total.value,
        cupo_disponible: cupo_disponible.value,
        dias_gracia: dias_gracia.value,
    }
    return cliente;
}

