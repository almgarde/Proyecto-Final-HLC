import { Document } from "mongoose";

export interface IUsuario extends Document {

    usuario: string,
    pwd: string,
    email: string,
    role: string[]   

}