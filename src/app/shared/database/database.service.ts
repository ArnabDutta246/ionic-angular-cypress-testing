import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

import { HttpClient } from "@angular/common/http";

import { delay, map, retryWhen, scan, toArray } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  query = [{ name: "arnab", roll: 1 }];

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private httpClient: HttpClient
  ) {}
  // getAllData(){
  //   return this.query;
  // }
  // getAllData(collectionName) {
  //   return this.afs
  //     .collection(collectionName)
  //     .snapshotChanges()
  //     .pipe(
  //       map((res: any[]) =>
  //         res.map((res: any) => {
  //           let info = res.payload.doc.data();
  //           let id = res.payload.doc.id;
  //           let data = {
  //             id,
  //             ...info,
  //           };
  //           return data;
  //         })
  //       )
  //     );
  // }
  // getSingleData(collectionName,docId){
  //  return this.afs.collection(collectionName).doc(docId).snapshotChanges();
  // }
  // getDataUsingWhere(collectionName,field,sign,variable){
  //  return this.afs.collection(collectionName,this.filterFunction(field,sign,variable)).snapshotChanges();
  // }
  // filterFunction(field,sign,variable){
  //  return ref=>ref.where(field,sign,variable)
  // }

  // updateData(collectionName,dataObject){
  //  return this.afs.collection(collectionName).doc().set({dataObject},{merge:true});
  // }
  // deleteData(collectionName){
  //  return this.afs.collection(collectionName).doc().delete();
  // }
}
