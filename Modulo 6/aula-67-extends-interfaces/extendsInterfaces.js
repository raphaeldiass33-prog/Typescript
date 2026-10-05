"use strict";
/**
 * arquivo: extendsInterfaces.ts
 * descrição: arquivo responsável por ensinar uso de 'extends' e 'implements' em TypeScript
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
const cachorro = {
    nome: 'Akira',
    idade: 4,
    porte: 'Médio',
    raca: 'Vira-lata',
};
console.log(cachorro);
const animal = {
    nome: 'Frajola',
    idade: 5
};
console.log(animal);
const desenvolvedor = {
    id: 'ts-123',
    nome: 'Raphael Dias',
    salario: '10k',
    linguageProgramacao: 'typescript',
};
console.log(desenvolvedor);
module.exports = {};
// Exemplo 04 - Uso do pipe
// Exemplo 04 - Uso do pipe
/*interface Funcionario {
  id: number | string;
  nome: string;
  salario: number | string;
}

interface Desenvolvedor extends Funcionario {
  id: string;
  salario: string;
  linguageProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'ts-123',
  nome: 'Raphael Dias',
  salario: '10k',
  linguageProgramacao: 'typescript',
}

console.log(desenvolvedor)*/
//# sourceMappingURL=extendsInterfaces.js.map