import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private navController: NavController) {}

  ngOnInit() {
    this.home = ''; //this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  public pokedex(){
   this.navController.navigateForward('poke-geracao');
  }
}
