import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { CarroService } from "../services/carro.service";

@Component({
  selector: "app-modal-carro",
  templateUrl: "./modal-carro.page.html",
  styleUrls: ["./modal-carro.page.scss"],
})
export class ModalCarroPage implements OnInit {
  @Input() id: number;
  public isEdit: boolean = false;
  public form: FormGroup;
  constructor(
    public modal: ModalController,
    public carro: CarroService,
    public formbuilder: FormBuilder
  ) {
    this.form = formbuilder.group({
      nome: [""],
      marca: [""],
      modelo: [""],
      ano: [""],
      potencia: [""],
    });
  }

  //ngOnInit() {}

  async ngOnInit() {
    if (this.id || this.id === 0) {
      this.isEdit = true;
      await this.editarCarro();
    }
  }

  fecharModal(): void {
    this.modal.dismiss();
  }

  //public submitForm() {
  // console.log(this.form.value);
  //   console.log("estou aqui salvando os dados");
  //   this.carro.salvarCarro(this.form.value, this.id);
  // }

  async submitForm() {
    //console.log(this.form.value, "estou aqui salvando carro");

    this.carro.salvarCarro(this.form.value, this.id);
    this.fecharModal();
  }

  public async editarCarro() {
    const edCarro = await this.carro.getCarro(this.id);
    console.log("Editando o edCarro");
    this.form.patchValue(edCarro);
  }
}
