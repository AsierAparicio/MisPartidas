import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { bbddService } from '../../services/bbdd.service';
import Partida from '../../interfaces/Partida.interface';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mispartidas: Partida[] = [];
ngOnInit():void{
  var partidas = this.bbddService.getPartidas();
  partidas.then((partida) =>{
    this.mispartidas=partida
  })
  
}

  constructor(public alertController: AlertController, private bbddService:bbddService) {}

  async mostrarParticipantes(partida: Partida) {
    const alert = await this.alertController.create({
      header: `Participantes en ${partida.Nombre_Juego}`,
      message: partida.Participantes,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
