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
  public carregando = null;
  constructor(
    public modal: ModalController,
    public carro: CarroService,
    public loading: LoadingController,
    public actionSheetController: ActionSheetController
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getCarros();
  }

  public async getCarros(): Promise<void> {
    await this.showCarregando();
    console.log("estou aqui no get carros");
    this.carros = await this.carro.getAll();
    await this.fecharCarregando();
  }

  async abrirModalCarro(): Promise<void> {
    await this.showCarregando();
    const modal = await this.modal.create({
      component: ModalCarroPage,
    });
    modal.onDidDismiss().then(async () => {
      await this.getCarros();
    });
    await this.fecharCarregando();
    return await modal.present();
  }

  public async editar(idCarro: number) {
    //console.log(id);
    await this.showCarregando;
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

  async showCarregando(): Promise<void> {
    this.carregando = await this.loading.create({
      message: "Aguarde...",
    });
    await this.carregando.present();
  }

  async fecharCarregando(): Promise<void> {
    await this.carregando.dismiss();
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
