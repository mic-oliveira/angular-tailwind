import {Observable} from "rxjs";
import {SearchInterface} from "./search-interface";


export interface ApiInterface {
  get(filter?: SearchInterface): Observable<any>;
  
  find(id: string): Observable<any>;
  
  post(data: any): Observable<any>;
  
  update(data: any, id: string): Observable<any>;
  
  delete(id: any): Observable<any>;
}
