const listarClientes = () => {
    return fetch('http://localhost:4000/clientes')
    .then(resposta => {
        return resposta.json();
    })
    .then(json => {
        return json
    })
}

const cadastrarCliente = (nome, cpf) => {
    const json = JSON.stringify({
        nome:nome,
        cpf:cpf
    })
    return fetch('http://localhost:4000/clientes/cliente', {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: json
    })
    .then(resposta => {
        return resposta.body;
    })
}

const deletaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method:'DELETE'
    })
}