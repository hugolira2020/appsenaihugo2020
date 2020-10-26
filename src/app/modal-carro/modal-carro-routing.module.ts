import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCarroPage } from './modal-carro.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCarroPageRoutingModule {}
