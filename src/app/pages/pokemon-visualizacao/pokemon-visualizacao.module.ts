import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonVisualizacaoPageRoutingModule } from './pokemon-visualizacao-routing.module';

import { PipesModule } from 'src/app/pipes/pipes.module';

import { PokemonVisualizacaoPage } from './pokemon-visualizacao.page';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonVisualizacaoPageRoutingModule,
],
  declarations: [PokemonVisualizacaoPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PokemonVisualizacaoPageModule {}
