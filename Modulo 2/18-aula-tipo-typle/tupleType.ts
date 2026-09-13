/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 13/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa: [string, string, number];
pessoa = ['Raphael Dias', 'Desenvolvedor', 33];

console.log(pessoa); // Raphael

// ==> Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];
pessoa1 = ['Raphael Dias', 'Desenvolvedor', 33];

console.log(pessoa1[1]);

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)

let pessoa2: [nome: string, profissao: string, idade: number] = ['Raphael Dias', 'Desenvolvedor', 33];
console.log(pessoa2);


// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ... string[]] = ['banana', 'maçã', 'laranja', 'abacaxi', 'morango'];
console.log( ... listaFrutas);

// ==> Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ... string[]] = [5, true, ... listaFrutas];
console.log(... listaFrutas2);

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) 
{
    return [... nomes, ... idades];
}

let resultado = listarPessoas(['Raphael Dias', 'Raphaele'], [33, 28]);
console.log(resultado);

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome = 
        | [primeiroNome: string, sobrenome: string]
        | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome)
{
    return [... nome];
}

console.log(criarPessoa('Raphael', 'Dias'));
console.log(criarPessoa('Raphael', 'Ferreira', 'Dias'));