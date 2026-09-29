"use strict";
/* eslint-disable prefer-const */
/**
 * arquivo: optionalParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Optional Parameters' em funções no no Typescript
 * data: 29/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Optional Parameter
function descontoCompra(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(descontoCompra(100));
// ==> Exemplo 02
function exibirMensagem(mensagem, saudar = 'Fala, galera!') {
    return saudar + ' ' + mensagem + '!';
}
console.log(exibirMensagem('JavaScript Developers'));
// ==> Exemplo 03
function exibirNome(nome, sobrenome = 'Lemos') {
    return nome + ' ' + sobrenome;
}
const resultado_1 = exibirNome('Raphael');
const resultado_2 = exibirNome('Raphael', undefined);
// const resultado_3 = exibirNome('Raphael', 'Ferreira', 'Senhor');
const resultado_4 = exibirNome('Raphael', 'Dias');
console.log(resultado_1);
console.log(resultado_2);
// console.log(resultado_3);
console.log(resultado_4);
//# sourceMappingURL=defautParameters.js.map