/**
 * arquivo: zipcode-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadias>
 */

import { Validator } from "./validator";

class ZipCodeValidator implements Validator {
    isValid(s: string): boolean {
        const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;

        return zipCodeRegex.test(s);
    }
}

export { ZipCodeValidator }