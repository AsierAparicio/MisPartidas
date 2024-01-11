import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bbddService } from '../../services/bbdd.service';
import { FormControl, FormGroup } from '@angular/forms';
import { IonTextarea } from '@ionic/angular';
import Partida from 'src/interfaces/Partida.interface';

@Component({
  selector: 'app-new-partida',
  templateUrl: './new-partida.page.html',
  styleUrls: ['./new-partida.page.scss'],
})
export class NewPartidaPage implements OnInit {
  @ViewChild('ganador') ganador!: IonTextarea;
  @ViewChild('jugadores') jugadores!: IonTextarea;

  juegoTitulo: string | null = null;  // Asigna un valor por defecto, podría ser null o cualquier valor por defecto que prefieras.

  formulario:FormGroup;
  constructor(
    private route: ActivatedRoute,
    private bbddService:bbddService,
    ) {
      this.formulario=new FormGroup({
        Nombre_juego:new FormControl(),
        Gandor:new FormControl(),
        Jugadores:new FormControl(),
      })
     }

  ngOnInit() {
    const tituloParam = this.route.snapshot.paramMap.get('titulo');
    this.juegoTitulo = tituloParam ? decodeURIComponent(tituloParam) : null;
  }
  async onSubmit(){
    var partida: Partida = {
      Ganador : "",
      Participantes : "",
      Nombre_Juego : ""
    };
    partida.Ganador =  this.ganador.value || "";
    partida.Participantes =  this.jugadores.value || "";
    this.route.params.subscribe(params => {
      partida.Nombre_Juego = params['titulo'];
   });
   const respose= await this.bbddService.addPartida(partida)
   console.log(respose);

   console.log(partida)
  
  }
}
