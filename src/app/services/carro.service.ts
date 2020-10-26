import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Carro } from "../models/carro";

@Injectable({
  providedIn: "root",
})
export class CarroService {
  constructor(public storage: Storage) {}

  public async getAll(): Promise<Carro[]> {
    let carros = await this.storage.get("carros");
    carros = JSON.parse(carros);
    return carros;
  }

  public async salvarCarro(carro: Carro, id: number): Promise<void> {
    if (id || id === 0) {
      await this.update(id, carro);
      return;
    }
    await this.save(carro);
  }

  public async update(id: number, carro): Promise<void> {
    let carros = await this.getAll();
    carros = carros.map((data, index) => {
      return id === index ? carro : data;
    });
    this.storage.set("carros", JSON.stringify(carros));
  }

  public async save(carro) {
    let carros = await this.getAll();
    console.log(carros, "salvando carro carro service.ts");
    if (!carros) {
      carros = [];
    }
    carros.push(carro);
    this.storage.set("carros", JSON.stringify(carros));
  }
  public async removeAll(): Promise<void> {
    await this.storage.remove("carros");
  }
  public async remove(index: number): Promise<void> {
    let carros = await this.getAll();
    carros.splice(index, 1);
    await this.storage.set("carros", JSON.stringify(carros));
  }

  public async getCarro(key: number) {
    let carros = await this.getAll();
    const carroProcurado = carros.find((carro, idC) => {
      if (idC === key) {
        return carro;
      }
    });
    return carroProcurado;
  }
}
