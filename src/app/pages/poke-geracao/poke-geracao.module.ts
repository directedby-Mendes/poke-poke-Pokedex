import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeGeracaoPageRoutingModule } from './poke-geracao-routing.module';

import { PokeGeracaoPage } from './poke-geracao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeGeracaoPageRoutingModule
  ],
  declarations: [PokeGeracaoPage]
})
export class PokeGeracaoPageModule {}
