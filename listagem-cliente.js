const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome, id) => {

    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <td>
    <button type="button" onclick="removeCliente(${id})" class="btn btn-danger">Excluir</button>
    <a class="btn btn-info" href="edita-clientes.html?id=${id}">Editar</a>
    </td>
    ` ;   

    linha.innerHTML = conteudoLinha;

    return linha;
}

const removeCliente = id => {
    if(confirm('Tem certeza de que quer excluir o cliente')){
        deletaCliente(id);
    }
}

listarClientes().then( exibe => {
    exibe.forEach(indice => {
        corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
    })
})