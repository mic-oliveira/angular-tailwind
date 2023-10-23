import {Component, Inject} from '@angular/core';
import {BehaviorSubject, debounceTime, Observable, of} from "rxjs";
import {ProductSearch} from "../../../product/models/ProductSearch";
import {LaravelMeta} from "../../../../shared/models/laravel-meta";
import {ApiInterface} from "../../../../services/api-interface";
import {LaravelPaginatorService} from "../../../../services/laravel-paginator-service";
import {LaravelPage} from "../../../../shared/models/laravel-page";
import {Customer} from "../../models/customer";
import {CustomerSearch} from "../../models/customer-search";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent {
  customers: Observable<Customer[]> = new Observable<Customer[]>();
  search: CustomerSearch = new CustomerSearch();
  searchCustomer: BehaviorSubject<string> = new BehaviorSubject<string>('');
  meta: LaravelMeta = new LaravelMeta();
  
  constructor(@Inject('CustomerService') private service: ApiInterface, private paginationService: LaravelPaginatorService) {
  }
  
  ngOnInit(): void {
    this.searchCustomer.pipe(debounceTime(500)).subscribe((value) => {
      this.service.get(this.search).subscribe((data: LaravelPage) => {
        console.log(data)
        this.customers = of<any>(data.data);
        this.meta = data.meta;
        this.paginationService.updatePagination(data);
      });
    });
  }
  
  changePage(selectPage: number) {
    this.search.page = (selectPage).toString();
    this.searchCustomer.next('');
  }
}
