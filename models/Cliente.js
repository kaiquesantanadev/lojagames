export default class Cliente {
    constructor(objeto) {
        this.nome = objeto.nome;
        this.sobrenome = objeto.sobrenome;
        this.email = objeto.email;
        this.telefone = objeto.telefone;
        this.cep = objeto.cep;
        this.logradouro = objeto.logradouro;
        this.numero = objeto.numero;
        this.complemento = objeto.complemento;
        this.bairro = objeto.bairro;
        this.estado = objeto.estado;
    }
}
