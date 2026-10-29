"use strict";
/**
 * arquivo: genericsInterface.ts
 * descrição: arquivo responsável por ensinar sobre 'Generic Interfaces'
 * data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */
Object.defineProperty(exports, "__esModule", { value: true });
const myPair = {
    first: 33,
    second: 'Raphael Dias'
};
console.log(myPair);
async function fetchJson(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.completed);
})();
//# sourceMappingURL=genericsInterfaces.js.map