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
  partidas!: Partida[];
ngOnInit():void{
  this.bbddService.getPartidas().subscribe(partidas=>{console.log(partidas);
  })
}

  constructor(public alertController: AlertController, private bbddService:bbddService) {}

  /*async mostrarParticipantes(partida: Partida) {
    const alert = await this.alertController.create({
      header: `Participantes en ${partida.juego}`,
      message: partida.participantes,
      buttons: ['OK'],
    });

    await alert.present();
  }*/
}
