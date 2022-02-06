import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentidadGeneroPageRoutingModule } from './identidad-genero-routing.module';

import { IdentidadGeneroPage } from './identidad-genero.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentidadGeneroPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IdentidadGeneroPage]
})
export class IdentidadGeneroPageModule {}
