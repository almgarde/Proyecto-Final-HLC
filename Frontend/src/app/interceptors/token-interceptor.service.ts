import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _usuarioService: UsuarioService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._usuarioService.tokenAlmacenado != '') {
      let reqClonada = req.clone({
        setHeaders: {
          Authoritation: 'Bearer ' + this._usuarioService.tokenAlmacenado
        }
      });
      return next.handle(reqClonada);
    } else {
      return next.handle(req);
    }
  }
}
