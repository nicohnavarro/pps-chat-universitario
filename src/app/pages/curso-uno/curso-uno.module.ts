import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoUnoPageRoutingModule } from './curso-uno-routing.module';

import { CursoUnoPage } from './curso-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoUnoPageRoutingModule
  ],
  declarations: [CursoUnoPage]
})
export class CursoUnoPageModule {}
