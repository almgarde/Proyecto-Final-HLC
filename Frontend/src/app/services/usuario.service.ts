import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaRegistro } from '../interfaces/respuestaRegistro';
import { HttpClient } from '@angular/common/http';
import { RespuestaLogin } from '../interfaces/respuestaLogin';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private _http: HttpClient, private _router: Router) { }

  public url = environment.urlUsuario;
  public tokenAlmacenado: string = '';

  crearUsuario(usuario: any) {
    return new Promise<RespuestaRegistro>(resolve => {
      this._http.post<RespuestaRegistro>(`${this.url}newUser`, usuario).subscribe(resp => { resolve(resp) });
    });
  }

  login(usuario: any) {
    return new Promise<RespuestaLogin>(resolve => {
      this._http.post<RespuestaLogin>(`${this.url}login`, usuario).subscribe(resp => {
        console.log(resp);
        if (resp.status == 'ok') {
          this.guardaToken(resp.token);
        }
        resolve(resp);
      });
    });
  }
  async guardaToken(token: string) {
    await Storage.set({
      key: 'token',
      value: token,
    });
    this.tokenAlmacenado = token;
  }

  async getToken() {
    const tokenAlmacenado = await Storage.get({ key: 'token' });
    if (tokenAlmacenado.value) {
      this.tokenAlmacenado = tokenAlmacenado.value;
      return tokenAlmacenado.value;
    }
    return null;
  }

  async compruebaToken(): Promise<boolean> {
    const token = await this.getToken();
    if (!token) {
      this._router.navigate(['inicio']);
      return Promise.resolve(false);
    } else {
      return new Promise<boolean>(resolve => {
        this._http.post(`${this.url}renewToken`, null).subscribe((resp: any) => {
          if (resp.status == 'ok') {
            this.guardaToken(resp.token);
            resolve(true);
          } else {
            this._router.navigate(['inicio']);
            resolve(false);
          }

        });
      });


    }
  }

  logout() {
    Storage.remove({ key: 'token' });
    this.tokenAlmacenado = '';
    this._router.navigate(['inicio']);
  }


}
