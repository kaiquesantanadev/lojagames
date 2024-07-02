import Cliente from "../../models/Cliente.js";
import localStorageClientes from "../../services/localStorageClientes.js";

export const clienteController = {
    async getCEP() {
        const dados = await fetch(`https://viacep.com.br/ws/${cepCliente.value}/json/`);
        const dadosJSON = await dados.json();
        document.querySelector('#logradouroCliente').value = dadosJSON.logradouro
        document.querySelector('#bairroLogradouro').value = dadosJSON.bairro
        document.querySelector('#estadoLogradouro').value = dadosJSON.uf
    },

    submitForm: (e) => {
        e.preventDefault()
        const dadosClientes = {
            nome: document.querySelector('#nomeCliente').value,
            sobrenome: document.querySelector('#sobrenomeCliente').value,
            email: document.querySelector('#emailCliente').value,
            telefone: document.querySelector('#telefoneCliente').value,
            cep: document.querySelector('#cepCliente').value,
            logradouro: document.querySelector('#logradouroCliente').value,
            numero: document.querySelector('#numeroLogradouro').value,
            complemento: document.querySelector('#complementoLogradouro').value,
            bairro: document.querySelector('#bairroLogradouro').value,
            estado: document.querySelector('#estadoLogradouro').value
        }
        console.log(dadosClientes.cep)
        clienteController.criarCliente(dadosClientes)
    },

    criarCliente: (objetoCliente) => {
        const novoCliente = new Cliente(objetoCliente);
        let clientes = localStorageClientes.getClientes();
        console.log(clientes)
        clientes.push(novoCliente)
        localStorageClientes.saveClientes(clientes)
        // window.location.href = 'successCliente.html';
    },

    inserirNaTabela() {
        const bodyTabela = document.querySelector("#body-table");
        const clientes = localStorageClientes.getClientes();
        console.log(clientes)
        bodyTabela.innerHTML = '';
        clientes.forEach((cliente, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${cliente.nome}</td>
                <td>${cliente.sobrenome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.cep}</td>
                <td>
                  <button class="btn delete-btn" data-id="${index}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                  <button class="btn editar-btn" data-id="${index}"><i class="fa fa-pen" aria-hidden="true"></i></button>
                </td>
                `;
            bodyTabela.appendChild(tr);
        });

        const botaoDeletar = document.querySelectorAll(".delete-btn");
        botaoDeletar.forEach(botao => {
            botao.addEventListener('click', (e) => clienteController.deletarCliente(e));
        });
    },

    deletarCliente(e) {
        const idCliente = e.target.closest("button").getAttribute("data-id");
        let clientes2 = localStorageClientes.getClientes();
        clientes2.splice(idCliente, 1);
        localStorageClientes.saveClientes(clientes2);
        clienteController.inserirNaTabela();
    },

    
}
