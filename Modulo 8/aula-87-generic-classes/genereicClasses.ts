/**
 * arquivo: genericClasses.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Generic Classes'
 /* data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */

export { };

// ==> Exemplo 01: Generic Classes

class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>('Raphael Dias');
const boxNumber = new Box<number>(33);

console.log(boxString.getItem());
console.log(boxNumber.getItem());

// ==> Exemplo 02

class Estudante<T, U> {
    private id: T;
    private nome: U;

    setValor(id: T, nome: U): void {
        this.id = id;
        this.nome = nome;
    }

    retornarValor(): void {
        console.log('Identificação de Estudante...: $(this.id), Nome do Estudante...: ${this.nome}');
    }
}

const estudante = new Estudante<number, string>();

estudante.setValor(101, "Raphael Dias");
estudante.retornarValor();

const estudanteSecundario = new Estudante<string, string>();

estudanteSecundario.setValor("201", "Raphaele Metri");
estudanteSecundario.retornarValor();