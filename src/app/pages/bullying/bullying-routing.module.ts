import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BullyingPage } from './bullying.page';

const routes: Routes = [
  {
    path: '',
    component: BullyingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BullyingPageRoutingModule {}
