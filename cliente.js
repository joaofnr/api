const informacoesClientes = [
    {
        cpf: 00765343088,
        nome: "Ronaldo"
    },
    {
        cpf: 343076588,
        nome: "Carol"
    }
];

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {

    const linha = document.createElement('tr');

    const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    ` ;   

    linha.innerHTML = conteudoLinha;

    return linha;
}

informacoesClientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
})