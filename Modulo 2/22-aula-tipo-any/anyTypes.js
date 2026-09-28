"use strict";
/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 13/09/2021
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Tipo Any
const a = 33;
const b = ['Raphael'];
const result = a + b;
console.log(result);
// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/
// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario = {
    nome: 'Raphael',
    sobrenome: 'Dias',
    idade: 33,
};
console.log(formulario);
//# sourceMappingURL=anyTypes.js.map