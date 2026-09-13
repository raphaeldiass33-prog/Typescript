"use strict";
/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 13/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Raphael Dias', 'Desenvolvedor', 33];
console.log(pessoa); // Raphael
// ==> Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Raphael Dias', 'Desenvolvedor', 33];
console.log(pessoa1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
let pessoa2 = ['Raphael Dias', 'Desenvolvedor', 33];
console.log(pessoa2);
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['banana', 'maçã', 'laranja', 'abacaxi', 'morango'];
console.log(...listaFrutas);
// ==> Exemplo 05 - Lista Heterogênea de Tupla:
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(...listaFrutas2);
// ==> Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Raphael Dias', 'Raphaele'], [33, 28]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Raphael', 'Dias'));
console.log(criarPessoa('Raphael', 'Ferreira', 'Dias'));
//# sourceMappingURL=tupleType.js.map