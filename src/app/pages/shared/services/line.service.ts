import { Injectable } from '@angular/core';
import {Line} from "../../../model/line";
import {setDoc, doc, deleteDoc, Firestore, query, orderBy} from "@angular/fire/firestore";
import {docData} from "@angular/fire/firestore/lite";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class LineService {

  constructor(private fs: Firestore, private afs: AngularFirestore) { }

  createOrUpdateLine(line: Line) {
    return setDoc(doc(this.fs,`Lines/${line.id}`),line);
  }

  deleteLine(line: Line) {
    return deleteDoc(doc(this.fs,`Lines/${line.id}`));
  }

  getLineByID(id: string) {
    return docData(doc(this.fs, `Lines/${id}`),{idField: 'id'}) as Observable<Line>;
  }

  getAllLines() {
    return this.afs.collection<Line>(`Lines`,ref => ref.orderBy(`lineNumber`,`asc`)).valueChanges();
  }
}
