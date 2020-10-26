import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { Page2PageRoutingModule } from "./page2-routing.module";

import { Page2Page } from "./page2.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Page2PageRoutingModule,
  ],
  declarations: [Page2Page],
})
export class Page2PageModule {}
