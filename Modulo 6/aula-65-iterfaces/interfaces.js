"use strict";
/**
 * arquivo: interfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'Interfaces' em TypeScript
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function exibirNome(pessoa) {
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
};
console.log(exibirNome(Raphael));
const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien'
};
console.log(livro);
const carro = {
    modelo: 'Fusca',
    ano: 1969,
};
console.log(carro);
class Gato {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
}
const gato = new Gato('Mingau', 2, true);
console.log(gato);
gato.comer('ração');
//# sourceMappingURL=interfaces.js.map