import { Injectable } from '@angular/core';
import {ApiInterface} from "../api-interface";
import {Observable} from "rxjs";
import {Invoice} from "../../modules/invoice/models/invoice";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {InvoiceSearch} from "../../modules/invoice/models/invoiceSearch";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService implements ApiInterface {
  private endpoint = `${environment.invoice_api}/invoices`;
  constructor(private http: HttpClient) { }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }

  find(id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  get(filter?: InvoiceSearch): Observable<any> {
    return this.http.get(`${this.endpoint}${filter?.toURI()}`);
  }

  post(data: any): Observable<any> {
    return this.http.post(`${this.endpoint}`, data);
  }

  update(data: any, id: string): Observable<any> {
    return this.http.put(`${this.endpoint}/${id}`, data);
  }

}
