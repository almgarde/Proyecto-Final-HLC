
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(public toastController: ToastController,public loadingController: LoadingController) { }

  async muestraMensaje(mensaje: string, tiempo?: number) {
    let t = tiempo?tiempo:2000;
    const toast = await this.toastController.create({
      message: mensaje,
      duration: t
    });

    toast.present();
  }

  public loading: HTMLIonLoadingElement;

  async muestraLoading() {
      this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...',
      duration: 2000
    });
    await this.loading.present();

  }

  async paraLoading(){
    await this.loading.dismiss();
    

  }

}
