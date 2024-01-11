import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { bbddService } from '../../services/bbdd.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-partida',
  templateUrl: './new-partida.page.html',
  styleUrls: ['./new-partida.page.scss'],
})
export class NewPartidaPage implements OnInit {

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
   const respose= await this.bbddService.addPartida(this.formulario.value)
   console.log(respose);

  }
}
