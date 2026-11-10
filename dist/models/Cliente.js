export class Cliente {
    id;
    nome;
    cpf;
    rg;
    anoNascimento;
    constructor(id, nome, cpf, rg, anoNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.anoNascimento = anoNascimento;
    }
    getCPF() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getrg() {
        return this.rg;
    }
    getanoNascimento() {
        return this.anoNascimento;
    }
    getIdade() {
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        return anoAtual - this.anoNascimento;
    }
}
