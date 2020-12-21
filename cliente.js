const informacoesClientes = [
    {
        cpf: 00765343088,
        nome: "Ronaldo"
    }
];

const conteudoLinha = `<tr>
<td>${informacoesClientes[0].cpf}</td>
<td>${informacoesClientes[0].nome}</td>
</tr>` ;

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

corpoTabela.innerHTML = conteudoLinha;