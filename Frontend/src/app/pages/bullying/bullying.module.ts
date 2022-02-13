import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BullyingPageRoutingModule } from './bullying-routing.module';

import { BullyingPage } from './bullying.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BullyingPageRoutingModule,
    ComponentesModule
  ],
  declarations: [BullyingPage]
})
export class BullyingPageModule {}
