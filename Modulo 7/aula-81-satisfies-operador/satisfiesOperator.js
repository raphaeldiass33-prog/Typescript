"use strict";
/**
 * arquivo: satisfiesOperator.ts
 * descrição: arquivo responsável por ensinar uso do 'satisfies' operator
 * data: 05/10/2026
 * author: Raphael Dias <Twitter: @oraphadias33>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    localNascimento: "Rio de Janeiro",
    residencialAtual: { x: 10, y: 20 },
};
console.log(pessoa.localNascimento.toUpperCase());
const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
};
function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
//# sourceMappingURL=satisfiesOperator.js.map