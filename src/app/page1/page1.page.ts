import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { ModalController } from "@ionic/angular";
import { Entidade } from "../models/Entidade";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public entidades: Entidade[];
  //idEntes: number;

  constructor(
    public apiService: ApiService,
    public modal: ModalController,
    public router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log("estou no oage 1 init");
    // this.getEntidades();
    this.entidades = this.router.snapshot.params.id;
    this.getEntidades();
  }

  public buscarEntidade(idEnt: number): void {
    this.entidades = [];
    this.apiService.getEntidades().subscribe((response) => {
      //console.log(response);
      this.entidades = response.items;
    });
  }

  search(event): void {
    const busca = event.target.value;
    if (!busca) {
      this.getEntidades();
      return;
    }

    this.entidades = this.entidades.filter((entidade, index) => {
      return entidade.ente.toLowerCase().includes(busca.toLowerCase());
    });
    //console.log("estou no search");
  }

  clear(): void {
    this.getEntidades();
  }

  async abrirModal(idEntes: number) {
    const modal = await this.modal.create({
      component: Page1Page,
      componentProps: { idEntes },
    });
    return await modal.present();
  }

  getEntidades() {
    this.apiService.getEntidades().subscribe((response) => {
      this.entidades = response.items;
      console.log(response);
    });
  }

  fecharModal(): void {
    this.modal.dismiss();
  }
}
