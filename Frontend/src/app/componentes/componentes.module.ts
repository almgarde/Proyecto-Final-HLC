import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IonicModule } from '@ionic/angular';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';



@NgModule({
  declarations: [CabeceraComponent, ShowHidePasswordComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CabeceraComponent,
ShowHidePasswordComponent
  ]
})
export class ComponentesModule { }
