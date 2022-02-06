import { model, Schema } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";



const usuarioShema = new Schema<IUsuario>({

    usuario: {
        type: String,
        unique: true,
        uniqueCaseIntensitive: true,
        trim: true
    },
    pwd: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        uniqueCaseIntensitive: true,
        trim: true
    },
    role: [{ type: String }],

},
    {
        timestamps: true
    })

export const Usuario = model<IUsuario>('usuario', usuarioShema);