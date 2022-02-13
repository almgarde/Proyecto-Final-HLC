import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentidadGeneroPage } from './identidad-genero.page';

const routes: Routes = [
  {
    path: '',
    component: IdentidadGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentidadGeneroPageRoutingModule {}
