import { Router } from "express";
import usuarioController from "../controladores/usuario.controlador";
import { compruebaToken } from "../middlewares/compruebaToken";

const usuarioRutas = Router();
//usuarioRutas.get('/getDatos', usuarioController.prototype.getDatos);
usuarioRutas.post('/login', usuarioController.prototype.login);
usuarioRutas.post('/newUser', usuarioController.prototype.crearUsuario);
usuarioRutas.post('/renewToken', compruebaToken, usuarioController.prototype.renuevaToken);

export default usuarioRutas;