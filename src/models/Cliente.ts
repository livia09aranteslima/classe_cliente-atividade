export class Cliente{
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    anoNascimento: number;
    
    constructor(id: number, nome: string, cpf: string, rg: string, anoNascimento: number){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.anoNascimento = anoNascimento;
    }

    getCPF() : string{
        return this.cpf;
    }

    getNome() : string{
        return this.nome;
    }

    getrg() : string{
        return this.rg;
    }

    getanoNascimento() : number{
        return this.anoNascimento;
    }

    getIdade() : number{
        const dataAtual = new Date();
        const anoAtual = dataAtual.getFullYear();
        return anoAtual - this.anoNascimento;
    }
}
