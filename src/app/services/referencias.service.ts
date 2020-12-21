import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ReferenciaBibliografica } from "../models/referencias.interface";

@Injectable({
  providedIn: "root",
})
export class ReferenciasService {
  private referenciasCollection: AngularFirestoreCollection<ReferenciaBibliografica>;
  private referencias: Observable<ReferenciaBibliografica[]>;

  constructor(private db: AngularFirestore) {
    
  }

  setCollections(idUsuario) {
    this.referenciasCollection = this.db.collection<ReferenciaBibliografica>(
      `users/${idUsuario}/referencias`
    );
    this.referencias = this.referenciasCollection.snapshotChanges().pipe(
      map((actions) => {
        return actions.map((a) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;          
          return { id, ...data };
        });
      })
    );
  }

  getReferencias() {
    return this.referencias;
  }  

  getReferencia(id: string) {
    return this.referenciasCollection.doc<ReferenciaBibliografica>(id).valueChanges();    
  }

  updateReferencia(referencia: ReferenciaBibliografica, id: string) {
    return this.referenciasCollection.doc(id).update(referencia);    
  }

  addReferencia(referencia: ReferenciaBibliografica) {
    return this.referenciasCollection.add(referencia);
  }

  removeReferencia(id: string) {
    return this.referenciasCollection.doc(id).delete();
  }

}
