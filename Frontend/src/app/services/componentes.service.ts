import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/componente';
@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private _http:HttpClient) {}
    public getComponentes(){
      return new Promise<Componente[]>(resolve=>{
        this._http.get<Componente[]>('../assets/componentes.json').subscribe(resp=>{resolve(resp)});
      });
    }

   
}
