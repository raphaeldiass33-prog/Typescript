"use strict";
/**
 * arquivo: genericsConstraints.ts
 * descrição: arquivo responsável por ensinar uso do 'Generics Constraints' em TypeScript
/* data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */
Object.defineProperty(exports, "__esModule", { value: true });
function obterPessoaIdadeMaiorQue(pessoas, idade) {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}
const pessoas = [
    { nome: 'Raphael', idade: 33 },
    { nome: 'João', idade: 20 },
    { nome: 'Angelica', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'José', idade: 18 },
];
const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas, 25);
console.log(pessoasComIdadeMaiorQue25);
// ==> Exemplo 02 - Generics Constraints
function juntarObjetos(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}
const pessoa = juntarObjetos({ nome: 'Raphael', }, { idade: 33 });
console.log(pessoa);
const pessoa2 = juntarObjetos({ nome: 'Raphael' }, 33);
console.log(pessoa2);
function juntarObjetos2(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}
const pessoa3 = juntarObjetos2({ nome: 'Raphael' }, { idade: 33 });
// ==> Exemplo 03 - Type parameter in generic constraints
/*function prop<T, K>(objeto: T, chave: K) {
  return objeto[chave];
}*/
function prop2(objeto, chave) {
    return objeto[chave];
}
const pessoa4 = prop2({ nome: 'Glaucia' }, 'nome');
console.log(pessoa4);
/*const pessoa5 = prop2(
  { nome: 'Glaucia' }, 'idade'
);

console.log(pessoa5);*/ 
//# sourceMappingURL=genericsConstraints.js.map