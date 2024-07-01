import formJogo2Controller from "../../controllers/formJogo/formJogo2Controller.js";

const form2 = document.querySelector('#cadastroForm2');

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    formJogo2Controller.salvarParte2();
});

formJogo2Controller.carregarParte2();
