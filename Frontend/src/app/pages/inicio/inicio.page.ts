import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/componente';
import { ComponentesService } from 'src/app/services/componentes.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private _datos: ComponentesService, private _mensajeService: MensajesService) { }
  public misComponentes: Componente[] = [];

  async ngOnInit() {
    await this._mensajeService.muestraLoading();
    try {
       this.misComponentes = await this._datos.getComponentes();
    } catch (error) {
      this._mensajeService.muestraMensaje("Error en el servidor");
    } finally {
      await this._mensajeService.paraLoading();
    }

  }

}
