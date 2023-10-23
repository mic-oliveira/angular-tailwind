import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private readonly _http: HttpClient) {
  }
  
  auth(email: string, password: string) {
    return this._http.post(`${environment.invoice_api}/login`, {email: email, password: password})
  }
}
