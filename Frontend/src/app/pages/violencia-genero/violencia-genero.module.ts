import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolenciaGeneroPageRoutingModule } from './violencia-genero-routing.module';

import { ViolenciaGeneroPage } from './violencia-genero.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolenciaGeneroPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ViolenciaGeneroPage]
})
export class ViolenciaGeneroPageModule {}
