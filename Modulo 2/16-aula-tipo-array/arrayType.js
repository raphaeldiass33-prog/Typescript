"use strict";
/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 13/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Uso de Colchetes:
let frutas = ['Banana', 'Maçã', 'Uva', 'Pera', 'Melancia'];
console.log(frutas[2]);
// ==> Exemplo 02 - Array Object (Objeto Array):
let frutas1 = ['Banana', 'Maçã', 'Uva', 'Pera', 'Melancia'];
console.log(frutas1[3]);
// ==> Exemplo 03 - Adicionando mais strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
idiomas.push('Alemão');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);
// ==> Exemplo 04 - Identificar tamanho do array - método 'length'
let idiomas1 = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas1.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator
let listaNumeros = [1, 2, 3, 4, 5];
let listaNumeros2 = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros2);
// ==> Exemplo 06 - Exemplo de Array com laço de iteração
let linguagensArray = ['JavaScript', 'TypeScript', 'Python', 'Java'];
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagensArray);
//# sourceMappingURL=arrayType.js.map