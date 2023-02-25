const host = 'http://localhost:8000';
async function countClientes() {
    const clientes = await getClientes();
    const numClientes = document.getElementById('numClientes');
    numClientes.textContent = clientes.length;
}
async function getClientes() {
    const clientes = await fetch(`${host}/api/clientes/`).then(res => res.json());
    return clientes;
}

countClientes();



