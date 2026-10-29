"use strict";
/**
 * arquivo: genericClasses.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Generic Classes'
 /* data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Generic Classes
class Box {
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setItem(item) {
        this.item = item;
    }
}
const boxString = new Box('Raphael Dias');
const boxNumber = new Box(33);
console.log(boxString.getItem());
console.log(boxNumber.getItem());
// ==> Exemplo 02
class Estudante {
    setValor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    retornarValor() {
        console.log('Identificação de Estudante...: $(this.id), Nome do Estudante...: ${this.nome}');
    }
}
const estudante = new Estudante();
estudante.setValor(101, "Raphael Dias");
estudante.retornarValor();
const estudanteSecundario = new Estudante();
estudanteSecundario.setValor("201", "Raphaele Metri");
estudanteSecundario.retornarValor();
//# sourceMappingURL=genereicClasses.js.map