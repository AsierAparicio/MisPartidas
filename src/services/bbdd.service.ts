import { Injectable } from "@angular/core";
import { Firestore } from "@angular/fire/firestore";
import { addDoc, collection } from "firebase/firestore";
import Juego from "src/interfaces/Juego.interface";
import Partida from "src/interfaces/Partida.interface";

@Injectable({
  providedIn:'root'
})
export class bbddService{

  constructor(private firestore:Firestore){}


  addPartida(partida: Partida){
    const JuegoRef=collection(this.firestore,'partidas');
    return addDoc(JuegoRef,partida);
  }


}
