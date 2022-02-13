import { Request, Response } from "express";
import { Usuario } from "../modelos/usuario.modelo";
import bcrypt from 'bcrypt';
import { Token } from "../clases/Token";

class usuarioController {
    getDatos(req: Request, res: Response) {

        console.log(req.query);
        let usuario = req.query.usuario;
        if (usuario) {
            return res.status(200).json({
                status: "ok",
                message: "el objeto es " + usuario
            });

        } else {
            return res.status(500).json({
                status: "fail",
                message: "no hay usuario"
            });

        }

    };

    crearUsuario(req: Request, res: Response) {

        let u = new Usuario();
        u.usuario = req.body.nombre + ' ' + req.body.apellidos;

        let pwdNoCrypt = req.body.pwd;
        const hash = bcrypt.hashSync(pwdNoCrypt, 10);
        u.pwd = hash;

        u.email = req.body.email;
        u.role = ['01'];


        Usuario.create(u, (err, usuarioDB) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                return res.status(200).json({
                    status: "ok",
                    message: "El usuario creado es " + usuarioDB.usuario
                })
            }

        })


    }

    login(req: Request, res: Response) {

        console.log(req.body);
        let email = req.body.email;
        let pwd = req.body.pwd;

        Usuario.findOne({ email: email }, null, null, (err, usuarioDB) => {
            if (err) {
                throw err;
            }
            if (usuarioDB) {
                if (bcrypt.compareSync(pwd, usuarioDB.pwd)) {
                    const usuarioQueMando = new Usuario();
                    usuarioQueMando._id = usuarioDB._id;
                    usuarioQueMando.usuario = usuarioDB.usuario;
                    usuarioQueMando.role = usuarioDB.role;
                    return res.status(200).json({
                        status: "ok",
                        message: "El usuario y la contraseña son correctas",
                        _id: usuarioDB._id,
                        token: Token.generaToken(usuarioQueMando)
                    });

                } else {
                    return res.status(200).json({
                        status: "fail",
                        message: "La contraseña es incorrecta"
                    });

                }

            } else {
                return res.status(200).json({
                    status: "fail",
                    message: "El usuario no es correcto"
                });
            }
        });
    };



    renuevaToken(req: Request, res: Response) {

        let usuarioToken = req.body.usuarioToken;
        const usuarioQueMando = new Usuario();
        usuarioQueMando._id = usuarioToken._id;
        usuarioQueMando.usuario = usuarioToken.usuario;
        usuarioQueMando.role = usuarioToken.role;

        return res.status(200).json({
            status: "ok",
            message: "Token renovado",
            _id: usuarioToken._id,
            token: Token.generaToken(usuarioQueMando)
        });
    }

}
export default usuarioController;