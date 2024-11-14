import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonVisualizacaoPage } from './pokemon-visualizacao.page';

describe('PokemonVisualizacaoPage', () => {
  let component: PokemonVisualizacaoPage;
  let fixture: ComponentFixture<PokemonVisualizacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonVisualizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
