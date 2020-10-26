import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalCarroPage } from "../modal-carro/modal-carro.page";
import { Carro } from "../models/carro";
import { CarroService } from "../services/carro.service";
import { LoadingController, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-page2",
  templateUrl: "./page2.page.html",
  styleUrls: ["./page2.page.scss"],
})
export class Page2Page implements OnInit {
  public carros: Array<Carro> = [];
  constructor(
    public modal: ModalController,
    public carro: CarroService,
    public actionSheetController: ActionSheetController
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getCarros();
  }

  public async getCarros(): Promise<void> {
    console.log("estou aqui no get carros");
    this.carros = await this.carro.getAll();
  }

  async abrirModalCarro(): Promise<void> {
    const modal = await this.modal.create({
      component: ModalCarroPage,
    });

    return await modal.present();
  }

  public async editar(idCarro: number) {
    //console.log(id);

    const modal = await this.modal.create({
      component: ModalCarroPage,
      componentProps: {
        id: idCarro,
      },
    });

    modal.onDidDismiss().then(async () => {
      await this.getCarros();
    });

    return await modal.present();
  }

  public async remover(id: number) {
    await this.carro.remove(id);
    this.getCarros();
  }

  async actionSheetDelete(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: "Tem certeza que deseja deletar ?",
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "sim",
          role: "destructive",
          icon: "trash",
          handler: async (): Promise<void> => {
            //função sem nome
            // console.log("Delete clicked");
            await this.remover(id);
          },
        },
        {
          text: "cancelar",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
