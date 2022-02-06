"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_modelo_1 = require("../modelos/usuario.modelo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Token_1 = require("../clases/Token");
class usuarioController {
    getDatos(req, res) {
        console.log(req.query);
        let usuario = req.query.usuario;
        if (usuario) {
            return res.status(200).json({
                status: "ok",
                message: "el objeto es " + usuario
            });
        }
        else {
            return res.status(500).json({
                status: "fail",
                message: "no hay usuario"
            });
        }
    }
    ;
    crearUsuario(req, res) {
        let u = new usuario_modelo_1.Usuario();
        u.usuario = req.body.usuario;
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
                    message: "El usuario creado es " + usuarioDB.usuario,
                    usuario: {
                        _id: usuarioDB._id,
                        usuario: usuarioDB.usuario,
                        email: usuarioDB.email
                    }
                });
            }
        });
    }
    login(req, res) {
        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;
        usuario_modelo_1.Usuario.findOne({ usuario: usuario }, null, null, (err, usuarioDB) => {
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
}
exports.default = usuarioController;
