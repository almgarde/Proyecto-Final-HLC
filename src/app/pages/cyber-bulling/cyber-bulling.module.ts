import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyberBullingPageRoutingModule } from './cyber-bulling-routing.module';

import { CyberBullingPage } from './cyber-bulling.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyberBullingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [CyberBullingPage]
})
export class CyberBullingPageModule {}
