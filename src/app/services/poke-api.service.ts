import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  public guardaNumeroGeracao: number = 1;

  constructor( public http: HttpClient ) { }

  public getPokedexOne(gen: number){
    return new Promise((resolve,reject) =>{
      this.guardaNumeroGeracao = gen;
      this.http.get(`https://pokeapi.co/api/v2/generation/${gen}`).subscribe((data: any) =>{
        return resolve(data);
      }, (err: any) =>{
        return reject(err);
      })
    });
  }

  public getPokemonId(pokemonId: string | null){
    return new Promise((resolve,reject) =>{
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe((data: any) =>{
        return resolve(data);
      }, (err: any) =>{
        return reject(err);
      });
    });
  }

//   public getPokedexTwo(){
//     return new Promise((resolve,reject) =>{
//       this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe();
//     });
//   }
//   public getPokedexThree(){
//     return new Promise((resolve,reject) =>{
//       this.http.get("https://pokeapi.co/api/v2/pokedex/3").subscribe();
//     });
//   }
//   public getPokedexFour(){
//     return new Promise((resolve,reject) =>{
//       this.http.get("https://pokeapi.co/api/v2/pokedex/4").subscribe();
//     });
//   }
//   public getPokedexFive(){
//     return new Promise((resolve,reject) =>{
//       this.http.get("https://pokeapi.co/api/v2/pokedex/5").subscribe();
//     });
//   }
}