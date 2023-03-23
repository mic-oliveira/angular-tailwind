import {Observable} from "rxjs";

export interface ApiInterface {
  get(): Observable<any>;
  find(id: string): Observable<any>;
  post(data: any): Observable<any>;
  update(data: any, id: string): Observable<any>;
  delete(id: any): Observable<any>;
}
