"use strict";
/**
 * arquivo: zipcode-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 17/10/2026
 * author: Raphael Dias <Twitter: @oraphadias>
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator = void 0;
class ZipCodeValidator {
    isValid(s) {
        const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{3})?$/;
        return zipCodeRegex.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=zipcode-validator.js.map