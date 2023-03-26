import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../../../services/api/invoice.service";
import {Invoice} from "../../models/invoice";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-form-invoice',
  templateUrl: './form-invoice.component.html',
  styleUrls: ['./form-invoice.component.scss']
})
export class FormInvoiceComponent implements OnInit {
  invoice: Invoice = new class implements Invoice {
    due_date: string = '';
    email: string = '';
    id: string | undefined = undefined;
    products: [any] = <any>[];
    status: 'pending' |  'canceled' |  'paid' = 'pending'
    total_amount: number = 0;
  };

  constructor(private readonly _invoiceService: InvoiceService, private readonly _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.invoice.id)
    this._invoiceService.find(this._activatedRoute.snapshot.paramMap.get('id') ?? '').subscribe((response) => {
      this.invoice = response.data;
    })
  }


  submitForm() {

  }
}
