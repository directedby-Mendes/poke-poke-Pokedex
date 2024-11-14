import { Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MacrosService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private navController: NavController, private loadingController: LoadingController) { }


  // Exibir o carregamento com uma mensagem
  async msgAguarde(message: string = 'Aguarde, carregando...') {
    if (!this.loading) {
      this.loading = await this.loadingController.create({
        message,
        spinner: 'circles',
        cssClass: 'custom-loading', // Opcional: Para adicionar estilos personalizados
      });
      await this.loading.present();
    }
  }

  // Ocultar o carregamento
  async dismissAguarde() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
