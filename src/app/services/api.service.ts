import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
//import { Entidade } from "../models/entidade";
import { Observable } from "rxjs";
import { ResponseApientidade } from "../models/response-apientidade";
//import { ResponseEntidade } from "../models/response-entidade";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url = "https://apidatalake.tesouro.gov.br/ords/siconfi/tt";

  constructor(public httpClient: HttpClient) {}

  public getEntidades(): Observable<ResponseApientidade> {
    return this.httpClient.get<ResponseApientidade>(this.url + "/entes");
  }
}
