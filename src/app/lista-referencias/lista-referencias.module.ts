import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReferenciasPageRoutingModule } from './lista-referencias-routing.module';

import { ListaReferenciasPage } from './lista-referencias.page';
import { SettingsMenuComponent } from '../settings-menu/settings-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReferenciasPageRoutingModule
  ],
  declarations: [ListaReferenciasPage, SettingsMenuComponent]
})
export class ListaReferenciasPageModule {}
