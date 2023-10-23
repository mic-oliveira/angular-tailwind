import {Component, Inject, OnInit} from '@angular/core';
import {ApiInterface} from "../../../../services/api-interface";
import {BehaviorSubject, debounceTime, Observable, of} from "rxjs";
import {Invoice} from "../../models/invoice";
import {InvoiceSearch} from "../../models/invoiceSearch";
import {LaravelPaginatorService} from "../../../../services/laravel-paginator-service";
import {LaravelPage} from "../../../../shared/models/laravel-page";
import {LaravelMeta} from "../../../../shared/models/laravel-meta";

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {
  invoices: Observable<[Invoice]> = new Observable<[Invoice]>();
  searchOptions: InvoiceSearch = new InvoiceSearch();
  currentPage = 1;
  meta: LaravelMeta = new LaravelMeta();
  
  searchInvoice: BehaviorSubject<string> = new BehaviorSubject<string>('');
  
  constructor(@Inject('InvoiceService') private invoiceService: ApiInterface, private paginationService: LaravelPaginatorService) {
    console.log(this.searchOptions.toURI());
  }
  
  ngOnInit(): void {
    this.searchInvoice.pipe(debounceTime(500)).subscribe((value) => {
      this.invoiceService.get(this.searchOptions).subscribe((data: LaravelPage) => {
        this.invoices = of<any>(data.data);
        this.meta = data.meta;
        this.paginationService.updatePagination(data);
      });
    });
  }
  
  search() {
    this.searchOptions.page = '1';
    this.searchInvoice.next('');
  }
  
  changePage(selectPage: number) {
    this.searchOptions.page = (selectPage).toString();
    this.searchInvoice.next('');
  }
}
