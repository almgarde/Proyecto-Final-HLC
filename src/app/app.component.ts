import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from './interfaces/componente';
import { ComponentesService } from './services/componentes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,private _datos:ComponentesService) {}

  public misComponentes:Componente[]=[];
  async ngOnInit(){
    this.misComponentes=await this._datos.getComponentes();

  }
}
