import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeGeracaoPage } from './poke-geracao.page';

const routes: Routes = [
  {
    path: '',
    component: PokeGeracaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeGeracaoPageRoutingModule {}
