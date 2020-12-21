import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReferenciaPage } from './detail-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReferenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReferenciaPageRoutingModule {}
