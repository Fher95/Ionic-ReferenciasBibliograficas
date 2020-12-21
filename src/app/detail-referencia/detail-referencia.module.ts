import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReferenciaPageRoutingModule } from './detail-referencia-routing.module';

import { DetailReferenciaPage } from './detail-referencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReferenciaPageRoutingModule
  ],
  declarations: [DetailReferenciaPage]
})
export class DetailReferenciaPageModule {}
