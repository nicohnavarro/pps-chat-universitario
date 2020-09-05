import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoUnoPage } from './curso-uno.page';

const routes: Routes = [
  {
    path: '',
    component: CursoUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoUnoPageRoutingModule {}
