import {Component, Inject, OnInit} from '@angular/core';
import {ApiInterface} from "../../../../services/api-interface";
import {Observable, of} from "rxjs";
import {Invoice} from "../../models/invoice";

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.scss']
})
export class ListInvoiceComponent implements OnInit {
  invoices: Observable<[Invoice]> = new Observable<[Invoice]>();
  constructor(@Inject('ApiInterface') private invoiceService: ApiInterface) {
  }

  ngOnInit(): void {
    this.invoiceService.get().subscribe((data) => {
      this.invoices = of(data.data);
    });
  }


}
