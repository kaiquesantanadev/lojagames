import Jogo from "../../models/Jogo.js";
import localStorageService from "../../services/localStorageJogos.js";

const jogoController = {
  submitForm() {
    const formParte1 = JSON.parse(localStorage.getItem("objForm1"));
    const formParte2 = JSON.parse(localStorage.getItem("objForm2"));
    const formParte3 = JSON.parse(localStorage.getItem("objForm3"));

    if (!formParte1 || !formParte2 || !formParte3) {
      this.catchErro();
      return;
    }

    const formObjeto = {
      ...formParte1,
      ...formParte2,
      ...formParte3,
    };
    this.criarJogo(formObjeto);
  },

  criarJogo(objetoJogo) {
    const novoJogo = new Jogo(objetoJogo);

    if (!this.checarJogo(novoJogo)) {
      this.catchErro();
      return;
    }

    let jogos = localStorageService.getJogos();
    jogos.push(novoJogo);
    localStorageService.saveJogos(jogos);
    this.limparLocalStorage();
    window.location.href = "successJogo.html";
  },

  checarJogo(jogo) {
    return Object.values(jogo).every(
      (atributo) => atributo !== null && atributo !== undefined
    );
  },

  catchErro() {
    this.limparLocalStorage()
    window.location.href = "errorJogo.html";
  },

  limparLocalStorage() {
    localStorage.removeItem("objForm1");
    localStorage.removeItem("objForm2");
    localStorage.removeItem("objForm3");
  },

  deletarJogo(e) {
    const idJogo = e.target.closest("button").getAttribute("data-id");
    let jogos = localStorageService.getJogos();
    jogos.splice(idJogo, 1);
    localStorageService.saveJogos(jogos);
    this.inserirNaTabela();
  },

  inserirNaTabela() {
    const bodyTabela = document.querySelector("#body-table");
    const jogos = localStorageService.getJogos();
    bodyTabela.innerHTML = "";
    jogos.forEach((jogo, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${jogo.titulo}</td>
                <td>${jogo.preco}</td>
                <td>${jogo.descricao}</td>
                <td>${jogo.modo}</td>
                <td>${jogo.plataforma}</td>
                <td>${jogo.crossPlataforma}</td>
                <td>${jogo.requisitos}</td>
                <td>${jogo.dataLancamento}</td>
                <td>${jogo.classificacaoEtaria}</td>
                <td>${jogo.idioma}</td>
                <td>${jogo.fabricante}</td>
                <td>
                  <button class="btn delete-btn" data-id="${index}"><i class="fa fa-trash" aria-hidden="true"></i></button>
                  <button class="btn editar-btn" data-id="${index}"><i class="fa fa-pen" aria-hidden="true"></i></button>
                </td>
                `;
      bodyTabela.appendChild(tr);
    });

    const botaoDeletar = document.querySelectorAll(".delete-btn");
    botaoDeletar.forEach((botao) => {
      botao.addEventListener("click", (e) => this.deletarJogo(e));
    });
  },
};

export default jogoController;
