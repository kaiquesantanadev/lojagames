export default class Cliente {
    constructor(objeto) {
        this.nome = objeto.nome;
        this.sobrenome = objeto.sobrenome;
        this.email = objeto.email;
        this.telefone = objeto.telefone;
        this.cpf = objeto.cpf;
    }
}