"use strict";
/**
 * arquivo: function.ts
 * descrição: arquivo responsável por ensinar como usar o functions no Typescript
 * data: 29/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Functions (Named function)
function somarNumeros(num1, num2) {
    return num1 + num2;
}
const resultado = somarNumeros(2, 2);
console.log(resultado);
// ==> Exemplo 02 - Função Anônima (Function Expression)
const saudar = function (mensagem) {
    return mensagem;
};
console.log(saudar('Olá, Developers!'));
// ==> Exemplo 03 - (Arrow Function Expression)
const saudar_03 = (mensagem) => {
    return mensagem;
};
console.log(saudar_03('Fala galera!'));
// ==> Exemplo 04 - (Function constructor)
const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');
console.log(saudar_04('Galera!'));
//# sourceMappingURL=functions.js.map