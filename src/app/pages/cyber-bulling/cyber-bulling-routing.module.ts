import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyberBullingPage } from './cyber-bulling.page';

const routes: Routes = [
  {
    path: '',
    component: CyberBullingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberBullingPageRoutingModule {}
