const id = new URLSearchParams(window.location.search).get('id');

const pagare_nro = document.getElementById('pagare_nro');
const cuota_mensual = document.getElementById('cuota_mensual');
const monto_credito = document.getElementById('monto_credito');
const cedula = document.getElementById('cedula');
const cuota_inicial = document.getElementById('cuota_inicial');
const cliente_id = document.getElementById('cliente_id');
const taza_interes = document.getElementById('taza_interes');
const fecha_credito = document.getElementById('fecha_credito');
const fecha_desembolso = document.getElementById('fecha_desembolso');
const observaciones = document.getElementById('observaciones');

const host = 'http://localhost:8000';
let clientes;
const cargarClientes = async () => {
    clientes = await fetch(`${host}/api/clientes/`).then(res => res.json());
    const select = document.getElementById('cliente_id');
    clientes.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = `${cliente.nombre} ${cliente.apellidos}`;
        select.appendChild(option);
    });
};

cargarClientes();

let credito;
const cargarcredito = async () => {
    credito = await fetch(`${host}/api/creditos/${id}/`).then(res => res.json());
    console.log(credito);
    pagare_nro.value = credito.pagare_nro;
    cuota_mensual.value = credito.cuota_mensual;
    monto_credito.value = credito.monto_credito;
    cuota_inicial.value = credito.cuota_inicial;
    cliente_id.value = credito.cliente_id;
    taza_interes.value = credito.taza_interes;
    fecha_credito.value = credito.fecha_credito;
    fecha_desembolso.value = credito.fecha_desembolso;
    observaciones.value = credito.observaciones;
};

cargarcredito();


cedula.addEventListener('keyup', (e) => {
    let nit = e.target.value;
    let clients = clientes.filter(cliente => {
        return (
            cliente.nit.toLowerCase().includes(nit.toLowerCase())
        );
    });
    const select = document.getElementById('cliente_id');
    select.textContent = '';
    clients.forEach(cliente => {
        const option = document.createElement('option');
        option.value = cliente.id;
        option.textContent = `${cliente.nombre} ${cliente.apellidos}`;
        select.appendChild(option);
    });
});



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
        const credito = getValues();
        updateCredito(credito);
    }
    form.classList.add('was-validated');
    event.preventDefault();
  }, false)
})

async function updateCredito(credito) {
    const res = await fetch(`${host}/api/creditos/${id}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credito),
    }).then(res => {
        window.location.href = 'creditos.html';
    }).catch(err => {
        console.log(err);
    });
};

function getValues() {
    const credito = {
        pagare_nro: pagare_nro.value,
        cuota_mensual: cuota_mensual.value,
        monto_credito: monto_credito.value,
        cuota_inicial: cuota_inicial.value,
        cliente_id: cliente_id.value,
        taza_interes: taza_interes.value,
        fecha_credito: fecha_credito.value,
        fecha_desembolso: fecha_desembolso.value,
        observaciones: observaciones.value,
    };
    return credito;
}