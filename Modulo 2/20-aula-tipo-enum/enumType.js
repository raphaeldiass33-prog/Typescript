"use strict";
/**
 * arquivo: enumType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 13/09/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01: Numeric Enums (Enums Numérico)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// ==> Exemplo 02: String Enums
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Terca"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["Sabado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.Segunda);
// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)
/*const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Torta,
    Churrasco,
}

    function comida(c: Comida) {
        return 'Comidas muito apetitosas!';
    }

    console.log(comida(Comida.Pizza));
    console.log(comida(Comida.Churrasco));
    //console.log(comida(5));*/
// ==> Exemplo 04: Quando usar enum?!
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    Id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns" Tarefa concluída com sucesso!',
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log(concluidaTarefa.descricao);
}
// console.log(comida(5));
//# sourceMappingURL=enumType.js.map