import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogadoPageRoutingModule } from './logado-routing.module';

import { LogadoPage } from './logado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogadoPageRoutingModule
  ],
  declarations: [LogadoPage]
})
export class LogadoPageModule {}
