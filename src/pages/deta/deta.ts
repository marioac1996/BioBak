import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-deta',
  templateUrl: 'deta.html',
})
export class DetaPage {
	cat = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.cat = this.navParams.get('cat');
  
  }

}

