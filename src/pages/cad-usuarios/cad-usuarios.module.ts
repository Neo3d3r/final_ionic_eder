import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadUsuariosPage } from './cad-usuarios';

@NgModule({
  declarations: [
    CadUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadUsuariosPage),
  ],
})
export class CadUsuariosPageModule {}
