import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
  standalone: true
})
export class PokemonNamePipe implements PipeTransform {
  transform(pokemons: any, name: string) {
    if (!name) return pokemons;
    
    return pokemons.filter((item: { name: string | string[]; }) => {
      if(item && item.name && typeof item.name === 'string'){
        const pokemonName = item.name;
        return pokemonName.toLowerCase().includes(name.toLowerCase());
      }
      return false;
    });
  }  
}

