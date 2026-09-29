/**
 * arquivo: function.ts
 * descrição: arquivo responsável por ensinar como usar o functions no Typescript
 * data: 29/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */

export {};

// ==> Exemplo 01 - Functions (Named function)

function somarNumeros(num1: number, num2: number): number {
return num1 + num2;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

// ==> Exemplo 02 - Função Anônima (Function Expression)

const saudar = function (mensagem: string) {
    return mensagem;
};

console.log(saudar('Olá, Developers!'));

// ==> Exemplo 03 - (Arrow Function Expression)

const saudar_03 = (mensagem: string) => {
    return mensagem;
};

console.log(saudar_03('Fala galera!'));

// ==> Exemplo 04 - (Function constructor)

const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar_04('Galera!'));