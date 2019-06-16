import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetaPage } from '../deta/deta';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
	infoCategoria = [];
	info = [];
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.infoCategoria = this.navParams.get('categoria');
  	console.log(this.infoCategoria);
  	if(this.infoCategoria['datos']!=undefined){
  		for(var i in this.infoCategoria['datos']){
  			var temp = [];
  			temp = this.infoCategoria['datos'][i];
  			temp['id'] = i;
  			this.info.push(temp);
  		}
  	}
  	console.log(this.info);
  }
  goToDetaPage(cat){
  this.navCtrl.push(DetaPage,{cat});
  }
}