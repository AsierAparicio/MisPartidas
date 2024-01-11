import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPartidaPage } from './new-partida.page';

const routes: Routes = [
  {
    path: '',
    component: NewPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPartidaPageRoutingModule {}
