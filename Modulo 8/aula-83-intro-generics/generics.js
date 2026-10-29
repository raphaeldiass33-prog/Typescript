"use strict";
/**
 * arquivo: generics.ts
 * descrição: arquivo responsável por ensinar uso do 'Generics' em TypeScript
/* data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Generics
function retornarElementosRandomicos(items) {
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}
;
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos(numeros);
console.log(numerosRandomicos);
let estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
let estadosRandomicos = retornarElementosRandomicos(estados);
console.log(estadosRandomicos);
// ==> Exemplo 02: Generics
function exibirElementos(array) {
    array.forEach((elemento) => {
        console.log(elemento);
    });
}
;
let number = [1, 2, 3, 4, 5];
let states = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul'];
exibirElementos(number);
exibirElementos(states);
//# sourceMappingURL=generics.js.map