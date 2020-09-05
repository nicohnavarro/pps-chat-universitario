import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDosPageRoutingModule } from './curso-dos-routing.module';

import { CursoDosPage } from './curso-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDosPageRoutingModule
  ],
  declarations: [CursoDosPage]
})
export class CursoDosPageModule {}
