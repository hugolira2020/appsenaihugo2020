import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalCarroPageRoutingModule } from "./modal-carro-routing.module";

import { ModalCarroPage } from "./modal-carro.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalCarroPageRoutingModule,
  ],
  declarations: [ModalCarroPage],
})
export class ModalCarroPageModule {}
