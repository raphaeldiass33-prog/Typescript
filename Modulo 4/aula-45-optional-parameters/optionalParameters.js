"use strict";
/**
 * arquivo: function.ts
 * descrição: arquivo responsável por ensinar como usar o functions no Typescript
 * data: 29/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa, nome, email) {
    console.log('Id funcionário ...: ', idPessoa, 'Nome...: ', nome);
    if (email !== undefined)
        console.log('E-mail ...: ', email);
}
informarDadosPessoa(775544, 'Raphael Dias');
informarDadosPessoa(994411, 'Raphaele Metri', 'raphaele.metri@email.com');
// ==> Exemplo 02
function mensagemLog(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, usuarioId ?? 'Usuário(a) não conectado(a)');
}
mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso', 775544);
let pessoa;
pessoa = {
    idFuncionario: 112233,
    nome: 'Raphael Dias',
};
console.log(pessoa);
//# sourceMappingURL=optionalParameters.js.map