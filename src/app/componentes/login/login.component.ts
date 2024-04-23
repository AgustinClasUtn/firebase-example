import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addDoc, collection, collectionData, DocumentData, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    public loginsCollection:any[] = [];
    public user:string = "";
    public countLogins:number = 0;

    public miObservable:BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(private firestore: Firestore){
      this.miObservable.subscribe((res) => {
        console.log("Se ha logueado el usuario: " + res);
      })
    }

    Login() {
      let col = collection(this.firestore, 'logins');
      addDoc(col, { fecha: new Date(), "user": this.user})

      //Actualizamos el valor de la variable
      this.miObservable.next(this.user);
    }
  
    GetData(){
      let col = collection(this.firestore, 'logins');
      
      const observable = collectionData(col);
  
      observable.subscribe((respuesta) => {

        //Actualizamos nuestra colección
        this.loginsCollection = respuesta;

        //Actualizamos la cantidad de registros que contiene la colección (Ejemplo propuesto en clase)
        this.countLogins = this.loginsCollection.length;

        console.log(respuesta);
      })

    }
}

    
    

