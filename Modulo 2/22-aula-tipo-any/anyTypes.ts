/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 13/09/2021
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */

// ==> Exemplo 01: Tipo Any
const a: any = 33;
const b: any = ['Raphael'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Raphael',
  sobrenome: 'Dias',
  idade: 33,
};

console.log(formulario);