"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_modelo_1 = require("../modelos/usuario.modelo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Token_1 = require("../clases/Token");
class usuarioController {
    crearUsuario(req, res) {
        let u = new usuario_modelo_1.Usuario();
        u.usuario = req.body.nombre + ' ' + req.body.apellidos;
        let pwdNoCrypt = req.body.pwd;
        const hash = bcrypt_1.default.hashSync(pwdNoCrypt, 10);
        u.pwd = hash;
        u.email = req.body.email;
        u.role = ['01'];
        usuario_modelo_1.Usuario.create(u, (err, usuarioDB) => {
            if (err) {
                console.log(err);
                throw err;
            }
            else {
                return res.status(200).json({
                    status: "ok",
                    message: "El usuario creado es " + usuarioDB.usuario
                });
            }
        });
    }
    login(req, res) {
        console.log(req.body);
        let email = req.body.email;
        let pwd = req.body.pwd;
        usuario_modelo_1.Usuario.findOne({ email: email }, null, null, (err, usuarioDB) => {
            if (err) {
                throw err;
            }
            if (usuarioDB) {
                if (bcrypt_1.default.compareSync(pwd, usuarioDB.pwd)) {
                    const usuarioQueMando = new usuario_modelo_1.Usuario();
                    usuarioQueMando._id = usuarioDB._id;
                    usuarioQueMando.usuario = usuarioDB.usuario;
                    usuarioQueMando.role = usuarioDB.role;
                    return res.status(200).json({
                        status: "ok",
                        message: "El usuario y la contraseña son correctas",
                        _id: usuarioDB._id,
                        token: Token_1.Token.generaToken(usuarioQueMando)
                    });
                }
                else {
                    return res.status(200).json({
                        status: "fail",
                        message: "La contraseña es incorrecta"
                    });
                }
            }
            else {
                return res.status(200).json({
                    status: "fail",
                    message: "El usuario no es correcto"
                });
            }
        });
    }
    ;
    renuevaToken(req, res) {
        let usuarioToken = req.body.usuarioToken;
        const usuarioQueMando = new usuario_modelo_1.Usuario();
        usuarioQueMando._id = usuarioToken._id;
        usuarioQueMando.usuario = usuarioToken.usuario;
        usuarioQueMando.role = usuarioToken.role;
        return res.status(200).json({
            status: "ok",
            message: "Token renovado",
            _id: usuarioToken._id,
            token: Token_1.Token.generaToken(usuarioQueMando)
        });
    }
}
exports.default = usuarioController;
