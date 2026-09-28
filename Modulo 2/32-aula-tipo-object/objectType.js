"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 -> Exemplo básico do uso do Type Object
const pessoa = {
    nome: 'Raphael',
    sobrenome: 'Dias',
    idade: 33,
    funcao: 'Cloud Advocate'
};
console.log(pessoa);
// ==> Exemplo 02 -> object como parâmetros de função (eles podem ser anônimos)
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Raphael Dias' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Raphael Dias', funcao: 'Cloud Advocate' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Raphael Dias', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Raphael Dias', funcao: 'Cloud Advocate', linguagem: 'JavaScript/Typescript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({
    nome: 'Raphael Dias',
    funcao: 'Cloud Advocate',
    linguagem: 'JavaScript/Typescript',
    email: 'raphael.dias@nuvemshop.com.br'
}));
const filha = {
    nome: 'Raphael',
    sobrenome: 'Dias',
    idade: 33
};
console.log(filha);
const usuario = {
    nome: 'Raphael Dias',
    email: 'algumacoisa@gmail.com'
};
const admin = {
    nome: 'Raphael Dias',
    email: 'algumacoisa@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
/*function acessarSistema(usuario: Usuario): Usuario {
  return usuario;
};*/
// console.log(acessarSistema(usuario));
//# sourceMappingURL=objectType.js.map