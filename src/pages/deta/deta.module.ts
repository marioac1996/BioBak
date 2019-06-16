import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetaPage } from './deta';

@NgModule({
  declarations: [
    DetaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetaPage),
  ],
})
export class DetaPageModule {}
