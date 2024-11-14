import { NgModule } from '@angular/core';
import { PokemonNamePipe } from './pokemon-name.pipe';
import { TextFormattingPipe } from './text-formatting.pipe';

@NgModule({
    declarations: [],
    imports: [PokemonNamePipe, TextFormattingPipe],
    exports:[PokemonNamePipe, TextFormattingPipe],
})

export class PipesModule {}
