"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 01/09/2026
 * author: Raphael Dias <@oraphadiass33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Variáveis [Type Annotations]
let nome = 'Raphael Dias';
console.log(nome);
// ==> Arrays [Type Annotations]
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);
// ==> Objetos [Type Annotations]
let carro;
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
console.log(carro);
// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
//# sourceMappingURL=typeAnnotation.js.map