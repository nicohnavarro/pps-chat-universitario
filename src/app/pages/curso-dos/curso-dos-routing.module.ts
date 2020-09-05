import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDosPage } from './curso-dos.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDosPageRoutingModule {}
