import formJogo1Controller from "../../controllers/formJogo/formJogo1Controller.js"

const form1 = document.querySelector('#cadastroForm1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();
    formJogo1Controller.salvarParte1();
});

formJogo1Controller.carregarParte1();
