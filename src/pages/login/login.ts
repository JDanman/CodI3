import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { UsuarioService } from "../../providers/usuario";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string = "";
  contrasena:string = "";

  sesion:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private _us:UsuarioService,
              private toastCtrl: ToastController ) {

  }

  ingresar(){

    //Función proveniente del provider usuario.ts
    this._us.ingresar(this.correo, this.contrasena)
    //Promesa (función asincrona):
    //Verifica el inicio de sesión cuando el servidor responde a su petición
    .subscribe( ()=>{
      if (this._us.activo()){
        this.darBienvenida();
        this.viewCtrl.dismiss(true);
      }
    });
   
  }

  darBienvenida() {
    const toast = this.toastCtrl.create({
      message: '¡Bienvenido!',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}
