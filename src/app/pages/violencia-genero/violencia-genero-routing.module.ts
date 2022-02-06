import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolenciaGeneroPage } from './violencia-genero.page';

const routes: Routes = [
  {
    path: '',
    component: ViolenciaGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolenciaGeneroPageRoutingModule {}
