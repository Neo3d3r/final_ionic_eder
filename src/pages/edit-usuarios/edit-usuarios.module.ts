import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUsuariosPage } from './edit-usuarios';

@NgModule({
  declarations: [
    EditUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(EditUsuariosPage),
  ],
})
export class EditUsuariosPageModule {}
