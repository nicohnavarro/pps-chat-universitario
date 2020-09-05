import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMensaje } from '../interfaces/IMensaje';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  mensajesColeccion: AngularFirestoreCollection<IMensaje>;
  mensajes: Observable<IMensaje[]>;
  mensajeDoc: AngularFirestoreDocument<IMensaje>;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  private grupoSelected;

  constructor(
    private db2: AngularFirestore) {

    // this.imagenes = this.db2.collection('images').valueChanges(); sin el id
    this.mensajesColeccion = this.db2.collection('mensajes');
    this.mensajes = this.mensajesColeccion.snapshotChanges().pipe(
      map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as IMensaje;
            data.id = a.payload.doc.id;
            return data
          });
        }));
  }

  getMensajesByGrupo(tipo: string) {
    //console.log(this.db2.collection('images', ref => ref.where('tipo', '==', tipo)))
    console.log('servicio');
    console.log(this.mensajes);
    return this.mensajes;
  }

  getMensajes() {
    return this.mensajes;
  }
  addMensaje(msg: IMensaje) {
    return this.mensajesColeccion.add(msg);
  }

}
