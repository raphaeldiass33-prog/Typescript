/**
 * arquivo: interfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'Interfaces' em TypeScript
 * data: 05/10/2026 
 * author: Raphael Dias <Twitter: @oraphadias33>
 */

export { };

// ==> Exemplo 01: Interface Simples

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: string;
}

function exibirNome(pessoa: Pessoa) {
  return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
  `;
}

const Raphael = {
    nome: 'Raphael',
    sobrenome: 'Dias',
    idade: '33 anos'
}

console.log(exibirNome(Raphael));

// ==> Exemplo 02: Interface com Propriedades Opcionais

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number; // ==> Propriedade Opcional
}

const livro: Livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien'
}

console.log(livro);

// ==> Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}

console.log(carro);

// carro.modelo = 'Fusca 2.0';

// ==> Exemplo 04: Interface com implements Class

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;    
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}

const gato = new Gato('Mingau', 2, true);
console.log(gato);
gato.comer('ração');

// ==> Exemplo 05: Interfaces vs Alias Type

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}

