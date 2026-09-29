"use strict";
/**
 * arquivo: restParameters.ts
 * descrição: arquivo responsável por ensinar como usar o
 * 'Rest Parameters' em funções no no Typescript
 * data: 29/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01
function somarNumeros(...numeros) {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
}
console.log(somarNumeros(30, 50));
console.log(somarNumeros(30, 50, 70, 90, 20));
// ==> Exemplo 02
function listarFrutas(frase, ...frutas) {
    return frase + ' ' + frutas.join(', ');
}
console.log(listarFrutas('Raphael, você precisa ir na feira para comprar...:', '🥥', '🍓', '🍌', '🍍'));
// ==> Exemplo 03
class Produtos {
    exibirProdutos(...produtos) {
        for (const produto of produtos) {
            console.log(produtos);
        }
    }
}
const departamentoInformatica = new Produtos();
console.log('Todos os produtos de Informatica disponíveis no estoque...:');
departamentoInformatica.exibirProdutos('Mouse', 'Notebook', 'USB', 'Monitor', 'Teclado', 'WebCam');
//# sourceMappingURL=restParameters.js.map