import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Partida {
  juego: string;
  ganador: string;
  fecha: string;
  participantes: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  partidas = [
    { juego: 'Everdell', ganador: 'Andoni', fecha: '04-01-2024',participantes:"Andoni, Asier"},
    { juego: '7 wonders Duel', ganador: 'Asier', fecha: '04-01-2024',participantes:"Andoni, Asier"},
  ];
  constructor(public alertController: AlertController) {}

  async mostrarParticipantes(partida: Partida) {
    const alert = await this.alertController.create({
      header: `Participantes en ${partida.juego}`,
      message: partida.participantes,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
