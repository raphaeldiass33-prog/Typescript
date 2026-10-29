/**
 * arquivo: email-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 17/10/26
 * author: Raphael Dias <Twitter: @oraphadias>
 */

//import { Validator as FormValidator } from "./validator";
import { Validator } from "./validator";

export default class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}