import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyD5yIgwxCOhK8QVWSP9AVAmHpAqZ4AP7UM",
  authDomain: "ecobak-c74b5.firebaseapp.com",
  databaseURL: "https://ecobak-c74b5.firebaseio.com",
  projectId: "ecobak-c74b5",
  storageBucket: "ecobak-c74b5.appspot.com",
  messagingSenderId: "939564490521",
  appId: "1:939564490521:web:4fea6fde556c3f0a"
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
