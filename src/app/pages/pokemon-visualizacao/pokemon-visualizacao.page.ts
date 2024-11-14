import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-visualizacao',
  templateUrl: './pokemon-visualizacao.page.html',
  styleUrls: ['./pokemon-visualizacao.page.scss'],
})
export class PokemonVisualizacaoPage implements OnInit {

  public pokemonId: string | null = '' ;
  public pokemonview: any = {} ;
  public gen: boolean = false;

  constructor(private activateRoute: ActivatedRoute,
    private pokeapiservices: PokeApiService,
    private navController: NavController
  ) 
  { 
    if(this.pokeapiservices.guardaNumeroGeracao > 5){
      this.gen = true;
  }
 }

  async ngOnInit() {
    this.pokemonId = this.activateRoute.snapshot.paramMap.get('id');
    this.pokemonview = await this.pokeapiservices.getPokemonId(this.pokemonId)

   //   this.pokemonview = pokemon;
      console.log(this.pokemonview);
  }
  capturar(){
    this.navController.navigateForward('pokebola', { queryParams: {pokemonId: this.pokemonId}});
  }
}
