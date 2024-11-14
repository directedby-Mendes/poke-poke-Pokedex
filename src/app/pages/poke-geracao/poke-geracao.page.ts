import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { __param } from 'tslib';

@Component({
  selector: 'app-poke-geracao',
  templateUrl: './poke-geracao.page.html',
  styleUrls: ['./poke-geracao.page.scss'],
})
export class PokeGeracaoPage implements OnInit {
  public numbers = [1,2,3,4,5,6,7,8,9];

  constructor(private nav:NavController, private router: Router) { 
  }

  ngOnInit() {console.log()}

  generationEnter(number: any){
    this.router.navigate(["/pokedex", number]);
  }
}
