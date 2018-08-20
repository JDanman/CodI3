import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductosService } from "../../providers/productos";
import { ProductoPage } from "../index.paginas";


@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class Busqueda {

  productoPage = ProductoPage;
  elemento:string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps:ProductosService) {
  }


  //Función asincrona sencible a cambios
  //(Actua cada vez que detecta un cambio en la barra de busqueda)
  buscar_productos(ev: any){

    this._ps.buscar_producto(this.elemento); 
    
  }


}
