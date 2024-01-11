import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}
  nuevaPartida(juego: string) {
    this.router.navigate(['./new-partida'], { state: { juegoSeleccionado: juego } });
  }
  juegos = [
    { titulo: 'Everdell', foto: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Everdell.jpg' },
    { titulo: 'Carcassone', foto: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fcarcassonne%2Fhome%2FVideos-Thumbnail-1920x1080.jpg-1920x1080-070b709cfd4fb6a85dbfc0ffe892bdb623e55f93.jpg' },
    { titulo: 'Sushi go Party', foto: 'https://www.juegakens.com/wp-content/uploads/2022/07/sushi-go-party.jpg' },
    { titulo: 'Mysterium', foto: 'https://cdn.akamai.steamstatic.com/steam/apps/556180/capsule_616x353.jpg?t=1694001670' },
    { titulo: '7 wonders duel', foto: 'https://cdn.svc.asmodee.net/production-rprod/storage/games/7-wonders-duel/57du-3dmockup-1597826159KUURt.png' }
  ];
}
