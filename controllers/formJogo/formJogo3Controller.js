const checaLocalStorage = localStorage.getItem('objForm1');
const checaLocalStorage2 = localStorage.getItem('objForm2');
if (checaLocalStorage == null) window.location.href = 'form-jogo1.html'
if (checaLocalStorage2 == null) window.location.href = 'form-jogo2.html'

import jogoController from "./jogoController.js";

const formJogo3Controller = {
    salvarParte3() {
        const dataLancamentoJogo = document.querySelector("#dataLancamentoJogo").value;
        const classificacaoEtariaJogo = document.querySelector("#classificacaoEtariaJogo").value;
        const idiomaJogo = document.querySelector("#idiomaJogo").value;
        const fabricanteJogo = document.querySelector("#fabricanteJogo").value;

        if (dataLancamentoJogo && classificacaoEtariaJogo && idiomaJogo && fabricanteJogo) {
            const objForm3 = {
                dataLancamentoJogo,
                classificacaoEtariaJogo,
                idiomaJogo,
                fabricanteJogo
            };
            const JSONobjForm3 = JSON.stringify(objForm3)
            localStorage.setItem('objForm3', JSONobjForm3);
            jogoController.submitForm();
        }
    },

    carregarParte3() {
        const pegarObjForm3 = localStorage.getItem('objForm3');
        const JSONpegarObjForm3 = JSON.parse(pegarObjForm3)
        if (pegarObjForm3 !== null) {
            document.querySelector('#dataLancamentoJogo').value = JSONpegarObjForm3.dataLancamentoJogo;
            document.querySelector("#classificacaoEtariaJogo").value = JSONpegarObjForm3.classificacaoEtariaJogo;
            document.querySelector("#idiomaJogo").value = JSONpegarObjForm3.idiomaJogo;
            document.querySelector("#fabricanteJogo").value = JSONpegarObjForm3.fabricanteJogo;
        }
    }
};

export default formJogo3Controller;
