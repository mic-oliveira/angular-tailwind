import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Paginate} from "./paginate";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {
  paginate: BehaviorSubject<Paginate> = new BehaviorSubject<Paginate>(new Paginate());
  public data$: Observable<Paginate> = this.paginate.asObservable();
  constructor() { }

  updatePaginate(pagination: Paginate) {
    this.paginate.next(pagination);
  }
}
