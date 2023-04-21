import {Component, OnInit} from '@angular/core';
import {InvoiceService} from "../../../../services/api/invoice.service";
import {Invoice} from "../../models/invoice";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {Product} from "../../../product/models/Product";


@Component({
  selector: 'app-form-invoice',
  templateUrl: './form-invoice.component.html',
  styleUrls: ['./form-invoice.component.scss']
})
export class FormInvoiceComponent implements OnInit {
  invoice: Invoice = new Invoice();
  showProductAdd = false;

  constructor(private readonly _invoiceService: InvoiceService, private readonly _activatedRoute: ActivatedRoute, private readonly _router: Router) {
    this.showProductAdd = this._activatedRoute.snapshot.paramMap.get('id') === 'create';
    this._invoiceService.find(this._activatedRoute.snapshot.paramMap.get('id') ?? '').subscribe((response) => {
      this.invoice = response.data;
    })
  }

  ngOnInit(): void {

  }

  addProduct(product: Product) {
    product.sold_value = product.price;
    this.invoice.products.push(product);
    this.invoice.sumTotal();
    console.log(this.invoice)
  }

  submitForm() {
    console.log(this.invoice);
    this._invoiceService.post(this.invoice).subscribe(() => {
      this._router.navigateByUrl('/invoice').then();
    })
  }
}
