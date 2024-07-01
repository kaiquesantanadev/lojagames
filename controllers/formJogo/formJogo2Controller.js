const checaLocalStorage = localStorage.getItem('objForm1');
if (checaLocalStorage == null) window.location.href = 'form-jogo1.html';

const formJogo2Controller = {
    salvarParte2() {
        const requisitosJogo = document.querySelector('#requisitosJogo').value;
        const modoJogo = document.querySelector('#modoJogo').value;
        const plataformaJogo = document.querySelector("#plataformaJogo").value;
        const crossPlataforma = document.querySelector("#crossPlataforma").value;

        if (modoJogo && plataformaJogo) {
            const objForm2 = {
                requisitosJogo, 
                modoJogo,
                plataformaJogo,
                crossPlataforma
            };
            const JSONobjForm2 = JSON.stringify(objForm2)
            localStorage.setItem('objForm2', JSONobjForm2);
            window.location.href = 'form-jogo3.html';
        }
    },

    carregarParte2() {
        const pegarObjForm2 = localStorage.getItem('objForm2');
        const JSONpegarObjForm2 = JSON.parse(pegarObjForm2)
        if (pegarObjForm2 !== null) {
            document.querySelector('#modoJogo').value = JSONpegarObjForm2.modoJogo;
            document.querySelector("#plataformaJogo").value = JSONpegarObjForm2.plataformaJogo;
            document.querySelector("#crossPlataforma").value = JSONpegarObjForm2.crossPlataforma;
            document.querySelector("#requisitosJogo").value = JSONpegarObjForm2.requisitosJogo;
        }
    }
};

export default formJogo2Controller;
