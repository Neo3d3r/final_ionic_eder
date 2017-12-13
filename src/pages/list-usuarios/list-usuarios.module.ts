import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListUsuariosPage } from './list-usuarios';

@NgModule({
  declarations: [
    ListUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListUsuariosPage),
  ],
})
export class ListUsuariosPageModule {}
