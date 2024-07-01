const formJogo1Controller = {
    salvarParte1() {
        const tituloJogo = document.querySelector('#tituloJogo').value;
        const precoJogo = document.querySelector("#precoJogo").value;
        const descricaoJogo = document.querySelector("#descricaoJogo").value;

        if (tituloJogo && precoJogo && descricaoJogo) {
            const objForm1 = {
                tituloJogo,
                precoJogo,
                descricaoJogo
            };
            const JSONobjForm1 = JSON.stringify(objForm1)
            localStorage.setItem('objForm1', JSONobjForm1);
            window.location.href = 'form-jogo2.html';
        }
    },

    carregarParte1() {
        const pegarObjForm1 = localStorage.getItem('objForm1');
        const JSONpegarObjForm1 = JSON.parse(pegarObjForm1)
        if (pegarObjForm1 !== null) {
            document.querySelector('#tituloJogo').value = JSONpegarObjForm1.tituloJogo;
            document.querySelector("#precoJogo").value = JSONpegarObjForm1.precoJogo;
            document.querySelector("#descricaoJogo").value = JSONpegarObjForm1.descricaoJogo;
        }
    }
};

export default formJogo1Controller;
