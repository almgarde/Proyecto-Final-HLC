import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogadoPage } from './logado.page';

const routes: Routes = [
  {
    path: '',
    component: LogadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogadoPageRoutingModule {}
