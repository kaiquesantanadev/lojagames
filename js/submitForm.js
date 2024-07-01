import Jogo from "../models/Jogo.js";
const jogos = JSON.parse(localStorage.getItem('jogos')) || [];

export function submitForm() {
    const formParte1 = localStorage.getItem('objForm1');
    const formParte2 = localStorage.getItem('objForm2');
    const formParte3 = localStorage.getItem('objForm3');
    const formObjeto = {
        ...JSON.parse(formParte1),
        ...JSON.parse(formParte2),
        ...JSON.parse(formParte3)
    }
    criarJogo(formObjeto)
}

function criarJogo(objetoJogo) {
    const novoJogo = new Jogo(objetoJogo)
    console.log(novoJogo)
    jogos.push(novoJogo)
    const jogosSTRING = JSON.stringify(jogos)
    console.log(jogosSTRING)
    localStorage.setItem('jogos', jogosSTRING)

    limparLocalStorage()
}

function limparLocalStorage() {
        localStorage.removeItem('objForm1');
        localStorage.removeItem('objForm2');
        localStorage.removeItem('objForm3');
}