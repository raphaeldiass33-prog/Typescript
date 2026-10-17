/**
 * arquivo: intersectionTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Intersection Types' em TypeScript
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */

export = {};

// ==> Exemplo 01 - Intersection Types:

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisca {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisca;

const dadosCliente: DadosCliente = {
    conta: 254241,
    agencia: 1234,
    banco: 'Banco do Brasil',
    nome: 'Raphael Dias',
    email: 'raphaeldiass33@gmail.com',
    cpf: 12345678900,
};

console.log(dadosCliente);

// ==> Exemplo 02 - Intersection Types:

interface IEndereco { 
    rua: string;
    bairro: string;
    cidade:string
}

interface IPessoa {
    nome: string;
    idade: number;
    profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;

const enderecoPessoa: IEnderecoPessoa = {
    nome: 'Raphael Dias',
    idade: 33,
    profissao: 'Programador',
    rua: 'Rua das Flores',
    bairro: 'Jardim das Rosas',
    cidade: 'São Paulo'
};

console.log(enderecoPessoa);