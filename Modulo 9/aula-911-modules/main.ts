/**
 * arquivo: main.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadiass>
 */

import { EmailValidator, ZipCodeValidator } from "./validators";

let email = 'raphaeldias@email.com';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

let validator2 = new ZipCodeValidator();
let result2 = validator2.isValid('12345');

console.log(`O CEP 12345 é válido? ${result2}`);