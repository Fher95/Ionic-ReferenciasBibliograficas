import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaReferenciasPage } from './lista-referencias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaReferenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaReferenciasPageRoutingModule {}
