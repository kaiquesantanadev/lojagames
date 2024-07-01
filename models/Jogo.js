export default class Jogo {
    constructor(objeto) {
        this.classificacaoEtaria = objeto.classificacaoEtariaJogo;
        this.crossPlataforma = objeto.crossPlataforma;
        this.dataLancamento = objeto.dataLancamentoJogo;
        this.descricao = objeto.descricaoJogo;
        this.fabricante = objeto.fabricanteJogo;
        this.idioma = objeto.idiomaJogo;
        this.modo = objeto.modoJogo;
        this.plataforma = objeto.plataformaJogo;
        this.preco = objeto.precoJogo;
        this.requisitos = objeto.requisitosJogo;
        this.titulo = objeto.tituloJogo;
    }
}