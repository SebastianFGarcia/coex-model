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

cupo_total.addEventListener('keyup', (e) => {
    let valor = e.target.value;
    cupo_disponible.value = valor;
})


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
        guardarCliente(cliente);
    }
    form.classList.add('was-validated');
    event.preventDefault();
    

  }, false)
})

async function guardarCliente(cliente) {
    console.log(cliente);
    const url = 'http://localhost:8000/api/clientes';
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers:{
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