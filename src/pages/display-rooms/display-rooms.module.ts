import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayRoomsPage } from './display-rooms';


@NgModule({
  declarations: [
    DisplayRoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayRoomsPage),
  ],
})
export class DisplayRoomsPageModule {}
