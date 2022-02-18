"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() {
    }
    static generaToken(payload) {
        return jsonwebtoken_1.default.sign({
            usuario: payload
        }, this.claveSecreta, {
            expiresIn: this.caducidad
        });
    }
    static compareToken(token) {
        console.log(this.claveSecreta, token);
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this.claveSecreta, (err, decoded) => {
                if (err) {
                    console.log(err.message);
                    reject('Token inválido');
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.Token = Token;
Token.datos = dotenv_1.default.config();
Token.claveSecreta = Token.datos.parsed.SECRETO;
Token.caducidad = '1y';
