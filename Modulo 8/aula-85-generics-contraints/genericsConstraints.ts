/**
 * arquivo: genericsConstraints.ts
 * descrição: arquivo responsável por ensinar uso do 'Generics Constraints' em TypeScript
/* data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */

// ==> Exemplo 01 - Generics Constraints

export { };

interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
    { nome: 'Raphael', idade: 33 },
    { nome: 'João', idade: 20 },
    { nome: 'Angelica', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'José', idade: 18 },
];

const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas, 25);

console.log(pessoasComIdadeMaiorQue25);

// ==> Exemplo 02 - Generics Constraints

function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
}

const pessoa = juntarObjetos(
    { nome: 'Raphael', },
    { idade: 33 }
);

console.log(pessoa);

const pessoa2 = juntarObjetos(
    { nome: 'Raphael' },
    33
);

console.log(pessoa2);

function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
}

const pessoa3 = juntarObjetos2(
    { nome: 'Raphael' },
    { idade: 33 }
);



// ==> Exemplo 03 - Type parameter in generic constraints

/*function prop<T, K>(objeto: T, chave: K) {
  return objeto[chave];
}*/

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
    return objeto[chave];
}

const pessoa4 = prop2(
    { nome: 'Glaucia' }, 'nome'
);

console.log(pessoa4);

/*const pessoa5 = prop2(
  { nome: 'Glaucia' }, 'idade'
);

console.log(pessoa5);*/