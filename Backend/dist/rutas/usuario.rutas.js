"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controlador_1 = __importDefault(require("../controladores/usuario.controlador"));
const compruebaToken_1 = require("../middlewares/compruebaToken");
const usuarioRutas = (0, express_1.Router)();
usuarioRutas.post('/login', usuario_controlador_1.default.prototype.login);
usuarioRutas.post('/newUser', usuario_controlador_1.default.prototype.crearUsuario);
usuarioRutas.post('/renewToken', compruebaToken_1.compruebaToken, usuario_controlador_1.default.prototype.renuevaToken);
exports.default = usuarioRutas;
