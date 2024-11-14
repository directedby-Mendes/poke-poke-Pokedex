import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pokedex/:id',
    loadChildren: () => import('./pages/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokemon-visualizacao/:id',
    loadChildren: () => import('./pages/pokemon-visualizacao/pokemon-visualizacao.module').then( m => m.PokemonVisualizacaoPageModule)
  },
  {
    path: 'pokebola',
    loadChildren: () => import('./pages/pokebola/pokebola.module').then( m => m.PokebolaPageModule)
  },
  {
    path: 'poke-geracao',
    loadChildren: () => import('./pages/poke-geracao/poke-geracao.module').then( m => m.PokeGeracaoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
