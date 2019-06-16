import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import {InfoPage} from '../info/info';

@IonicPage()
@Component({
  selector: 'page-flora',
  templateUrl: 'flora.html',
})
export class FloraPage {

  categorias = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.obtenerCategorias();
  }

  obtenerCategorias(){
  	let catRef = firebase.database().ref().child('flora');
  	catRef.on("value",(snap) => {
  		var data = snap.val();
  		this.categorias = [];
  		for(var key in data){
  			this.categorias.push(data[key]);
  		}
  	});
  }

  goToInfoPage(categoria){
    this.navCtrl.push(InfoPage,{categoria});
  }

}
