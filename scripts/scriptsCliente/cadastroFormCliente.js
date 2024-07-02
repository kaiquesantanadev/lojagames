import { clienteController } from "../../controllers/formCliente/formClienteController.js";
const cepCliente = document.querySelector("#cepCliente")
const formCliente = document.querySelector('#cadastroCliente');

cepCliente.addEventListener('blur', clienteController.getCEP);

formCliente.addEventListener('submit', clienteController.submitForm)
