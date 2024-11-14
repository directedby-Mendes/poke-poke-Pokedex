import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pokebola',
  templateUrl: './pokebola.page.html',
  styleUrls: ['./pokebola.page.scss'],
})
export class PokebolaPage implements OnInit {

  picture: string | undefined;
  pokemonId: string | undefined;
  captured: boolean = false;

  cameraOptions: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1,
    storeToFile: false,
  };

  constructor(private cameraPreview: CameraPreview,
    private route: ActivatedRoute,
    private alertCtrl: AlertController) { }

   ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params) this.pokemonId = params['pokemonId'];
    });

    this.cameraPreview.startCamera(this.cameraOptions).then(() => {
    console.log('Camera Iniciada...');
  }).catch((err) => {
    console.error(err);
  });
  
  }

  capturar(){

    console.log('Entre para capturar');

    this.cameraPreview?.takePicture(this.cameraOptions).then((imageData) => {
      
      this.picture = 'data:image/jpeg:base64.' + imageData;
      this.captured = true;
  
      this.showPokemon();

  }, (err) => {
    console.log(err);
  });
  }

  private async showPokemon() {

    let alert = await this.alertCtrl.create({
      header: 'pokemon',
      message: `<img src="${this.picture}">`,
      buttons: [
        {
          text: 'ok',
        },
      ],
    });

    await alert.present();

  }
}