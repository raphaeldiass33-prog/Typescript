"use strict";
/**
 * arquivo: accessModifier.ts
 * descrição: arquivo responsável por ensinar como usar o 'Modificadores de
 * Acesso' no Typescript
 * data: 03/10/2026
 * author: Raphael Dias <Twitter: @oraphaeldias>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01- Modificador: public
class Estudante {
}
const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = 'Raphael Dias';
console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);
// ==> Exemplo 02 - Modificador: private
class Estudante_2 {
    constructor(codigoEstudante, nomeEstudante, idade) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
    retornarDadosEstudante() {
        return `Código do Aluno...: ${this.codigoEstudante}.
        Nome do Estudante...: ${this.nomeEstudante}.
        Idade do Estudante...: ${this.idade}`;
    }
}
const estudante_2 = new Estudante_2(2011, 'Raphael Dias', 25);
console.log(estudante_2.retornarDadosEstudante());
// ==> Exemplo 03 - Modificador: protected
class Estudante_3 {
    constructor(codigoEstudante, nomeEstudante) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}
class Pessoa extends Estudante_3 {
    constructor(codigoEstudante, nomeEstudante, curso) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }
    retornarDados() {
        return `Código do Aluno...: ${this.codigoEstudante}.
        Nome do Estudante...: ${this.nomeEstudante}.
        Curso do Estudante...: ${this.curso}`;
    }
}
const estudante_3 = new Pessoa(2011, 'Raphael Dias', 'Typescript');
console.log(estudante_3.retornarDados());
//# sourceMappingURL=accessModifier.js.map