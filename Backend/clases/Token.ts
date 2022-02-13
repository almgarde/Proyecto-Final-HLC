import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export class Token {
    private static datos: any = dotenv.config();
    public static claveSecreta: string = Token.datos.parsed.SECRETO;
    public static caducidad: string = '1y';

    constructor() {
    }
    static generaToken(payload: any): string {
        return jwt.sign({
            usuario: payload
        }, this.claveSecreta, {
            expiresIn: this.caducidad
        });
    }

    static compareToken(token: string) {
        return new Promise<any>((resolve, reject) => {
            jwt.verify(token, this.claveSecreta, (err, decoded) => {
                if (err) {
                    reject('Token inválido');
                } else {
                    resolve(decoded);
                }
            })
        })
    }

}