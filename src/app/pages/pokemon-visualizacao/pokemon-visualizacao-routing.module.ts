import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonVisualizacaoPage } from './pokemon-visualizacao.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonVisualizacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonVisualizacaoPageRoutingModule {}
