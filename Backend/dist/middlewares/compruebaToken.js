"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compruebaToken = void 0;
const Token_1 = require("../clases/Token");
const usuario_modelo_1 = require("../modelos/usuario.modelo");
const compruebaToken = (req, res, next) => {
    let token = req.get('Authoritation');
    let userToken = '';
    if (token) {
        userToken = token.split("Bearer")[1];
        Token_1.Token.compareToken(userToken).then((decoded) => __awaiter(void 0, void 0, void 0, function* () {
            const idUsuario = decoded.usuario._id;
            const encontrado = yield usuario_modelo_1.Usuario.findById(idUsuario);
            if (encontrado) {
                req.body.usuarioToken = encontrado;
            }
            else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Token inválido'
                });
            }
            next();
        })).catch(err => {
            res.status(200).json({
                status: 'fail',
                message: 'Token inválido'
            });
        });
    }
    else {
        console.log('No nos ha llegado token');
        res.status(200).json({
            status: 'fail',
            message: 'Token inválido'
        });
    }
};
exports.compruebaToken = compruebaToken;
