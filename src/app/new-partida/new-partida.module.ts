import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPartidaPageRoutingModule } from './new-partida-routing.module';

import { NewPartidaPage } from './new-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPartidaPageRoutingModule
  ],
  declarations: [NewPartidaPage]
})
export class NewPartidaPageModule {}
