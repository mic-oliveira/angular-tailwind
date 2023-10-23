import {Injectable} from '@angular/core';
import {ApiInterface} from "../api-interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SearchInterface} from "../search-interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements ApiInterface {
  
  private endpoint = `${environment.invoice_api}/products`
  
  constructor(private http: HttpClient) {
  }
  
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
  
  find(id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`);
  }
  
  get(filter?: SearchInterface): Observable<any> {
    const filters = filter?.toURI();
    return this.http.get(`${this.endpoint}${filters}`);
  }
  
  post(data: any): Observable<any> {
    return this.http.post(`${this.endpoint}`, data);
  }
  
  update(data: any, id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${id}`, data);
  }
}
