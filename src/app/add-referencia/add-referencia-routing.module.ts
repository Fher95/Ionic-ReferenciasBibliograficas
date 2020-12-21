import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddReferenciaPage } from './add-referencia.page';

const routes: Routes = [
  {
    path: '',
    component: AddReferenciaPage
  }
];

@NgModule({  
  imports: [
    RouterModule.forChild(routes)    
  ],
  exports: [RouterModule],
})
export class AddReferenciaPageRoutingModule {}
