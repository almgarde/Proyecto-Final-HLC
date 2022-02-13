import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class EstaLogadoGuard implements CanActivate {

  constructor(private _usuarioService: UsuarioService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const res = this._usuarioService.compruebaToken();
    return res;
  }

}
