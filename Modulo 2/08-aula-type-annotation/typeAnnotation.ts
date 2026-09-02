/* eslint-disable prettier/prettier */
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * data: 01/09/2026
 * author: Raphael Dias <@oraphadiass33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

export { };

// ==> Variáveis [Type Annotations]
let nome: string = 'Raphael Dias';
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

// ==> Objetos [Type Annotations]
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 };
console.log(carro);

// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumero(2, 5));