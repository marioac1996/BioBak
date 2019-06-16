import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAUEuK4PtfwNP5zSqJYhuYuhsz2tq85uYY",
    authDomain: "practicasupb-11ac0.firebaseapp.com",
    databaseURL: "https://practicasupb-11ac0.firebaseio.com",
    projectId: "practicasupb-11ac0",
    storageBucket: "practicasupb-11ac0.appspot.com",
    messagingSenderId: "578064298862"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(firebaseConfig);
  }
}
