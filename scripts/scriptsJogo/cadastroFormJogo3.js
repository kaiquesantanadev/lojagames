import formJogo3Controller from "../../controllers/formJogo/formJogo3Controller.js";

const form3 = document.querySelector('#cadastroForm3');

form3.addEventListener('submit', (e) => {
    e.preventDefault();
    formJogo3Controller.salvarParte3();
});

formJogo3Controller.carregarParte3();
