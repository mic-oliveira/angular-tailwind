import {Component, Inject, OnInit} from '@angular/core';
import {ApiInterface} from "../../../../services/api-interface";
import {BehaviorSubject, debounceTime, Observable, of} from "rxjs";
import {Invoice} from "../../models/invoice";
import {InvoiceSearch} from "../../models/invoiceSearch";

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {
  invoices: Observable<[Invoice]> = new Observable<[Invoice]>();
  searchOptions: InvoiceSearch = new InvoiceSearch();

  searchInvoice: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor(@Inject('InvoiceService') private invoiceService: ApiInterface) {
    console.log(this.searchOptions.toURI());
  }

  ngOnInit(): void {
    this.searchInvoice.pipe(debounceTime(500)).subscribe((value) => {
      this.invoiceService.get(this.searchOptions).subscribe((data) => {
        this.invoices = of(data.data);
      });
    });
  }

  search() {
    this.searchInvoice.next('');
  }


}
