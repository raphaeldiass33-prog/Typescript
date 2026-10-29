"use strict";
/**
 * arquivo: email-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 17/10/26
 * author: Raphael Dias <Twitter: @oraphadias>
 */
Object.defineProperty(exports, "__esModule", { value: true });
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}
exports.default = EmailValidator;
//# sourceMappingURL=email-validator.js.map