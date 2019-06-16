import { Component } from '@angular/core';

import {FloraPage} from '../flora/flora';
import {FaunaPage} from '../fauna/fauna';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FloraPage;
  tab3Root = FaunaPage;

  constructor() {

  }
}
