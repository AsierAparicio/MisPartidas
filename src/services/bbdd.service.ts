import { Injectable } from "@angular/core";
import { Firestore, collectionData } from "@angular/fire/firestore";
import { addDoc, collection,collectionGroup } from "firebase/firestore";
import { Observable } from "rxjs";
import Juego from "src/interfaces/Juego.interface";
import Partida from "src/interfaces/Partida.interface";

@Injectable({
  providedIn:'root'
})
export class bbddService{

  constructor(private firestore:Firestore){}


  addPartida(partida: Partida){
    const juegoRef=collection(this.firestore,'partidas');
    return addDoc(juegoRef,partida);
  }
  getPartidas():Observable<Partida[]>{
    const juegoRef=collection(this.firestore,'partidas');
  return collectionData(juegoRef,{idField:'id'}) as Observable<Partida[]>
  }


}
