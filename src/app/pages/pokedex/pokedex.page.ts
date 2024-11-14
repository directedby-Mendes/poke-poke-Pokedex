/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';
import { MacrosService } from 'src/app/services/macros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  public listagemPokemon: any = [];
  public busca: string = '';
  public generationId: number = 1;
  constructor(private pokedexService: PokeApiService, private macros:MacrosService, private router: Router, private route: ActivatedRoute) {
    this.generationId = +(this.route.snapshot.paramMap.get('id') ?? 0);
  }

  ngOnInit() {
      this.getPokedexList();
  }

  public getPokedexList(){
    this.pokedexService.getPokedexOne(this.generationId).then((data: any) =>{
       this.macros.msgAguarde().then(_=> {
         try{
          this.listagemPokemon = data.pokemon_species
   
        } finally{
          this.macros.dismissAguarde();
        }
       });
    });
  }

  verMais(pokemon: any){
    this.router.navigate([`pokemon-visualizacao/${pokemon}`]);
    
  }
}
