import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CarritoService } from "../../providers/carrito";

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

  orden:any = {}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs:CarritoService,
              private alertCtrl:AlertController, 
              private toastCtrl:ToastController) {

    this.orden = this.navParams.get("orden");

  }

  borrar_orden( orden_id:string ){

    this._cs.borrar_orden(orden_id)
    .subscribe ( data =>{
      if(data.error){
        this.alertCtrl.create({
          title: "Error al borrar",
          subTitle: data.mensaje,
          buttons: ["OK"]
        }).present();
      }
      else{
        this.navCtrl.pop()
        this.confirmarBorrado();
      }
    });
    

  }

  confirmarBorrado() {
    const toast = this.toastCtrl.create({
      message: 'Pedido eliminado exitosamente',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }


}
