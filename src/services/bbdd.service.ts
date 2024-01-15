import { Injectable } from "@angular/core";
import { Firestore, collectionData } from "@angular/fire/firestore";
import { DocumentData, addDoc, collection,collectionGroup, getDocs, query } from "firebase/firestore";
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

  async getPartidas():Promise<Partida[]>{
    try {
    // Referencia a la colección 'partidas' en Firestore
    const juegoRef = collection(this.firestore, 'partidas');

    // Consulta para obtener todos los documentos en la colección
    const q = getDocs(juegoRef);

    // Obtiene el resultado de la consulta
    const querySnapshot = await q;

    // Mapea los documentos a objetos Partida
    const partidas = querySnapshot.docs.map((doc) => {
      const partida = doc.data() as DocumentData;
      return partida as Partida;
    });

    // Devuelve el array de partidas
    return partidas;
  } catch (error) {
    console.error('Error al obtener las partidas:', error);
    throw error;
  }
  }


}
