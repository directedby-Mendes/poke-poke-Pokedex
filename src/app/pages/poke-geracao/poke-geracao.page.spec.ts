import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeGeracaoPage } from './poke-geracao.page';

describe('PokeGeracaoPage', () => {
  let component: PokeGeracaoPage;
  let fixture: ComponentFixture<PokeGeracaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeGeracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
