"use strict";
/* eslint-disable prettier/prettier */
/**
 * arquivo: loop-while.ts
 * descrição: arquivo responsável por ensinar como usar o loop for no Typescript
 * data: 28/09/2022
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ==> Exemplo 01 - while
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
// ==> Exemplo 02
let numero = 1;
while (numero <= 20) {
    if (numero % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 a 20 é...: ', numero);
        break;
    }
    numero++;
}
// ==> Exemplo 03 - exemplo mais prático
let contadorUsuario = 0;
const usuario = ['Raphael', 'Raphaele', 'Davi'];
while (usuario[contadorUsuario]) {
    console.log('Usuários...: ', usuario[contadorUsuario]);
    contadorUsuario++;
}
// ==> Exemplo 04 - do...while
let contador_01 = 0;
do {
    console.log(contador_01);
    contador_01++;
} while (contador_01 < 5);
//# sourceMappingURL=loop-while.js.map