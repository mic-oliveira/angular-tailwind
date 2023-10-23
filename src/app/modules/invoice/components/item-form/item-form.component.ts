import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {ApiInterface} from "../../../../services/api-interface";
import {Product} from "../../../product/models/Product";
import {debounceTime, Observable, of, Subject} from "rxjs";
import {ProductSearch} from "../../../product/models/ProductSearch";
import {NgForm} from "@angular/forms";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @ViewChild('quantity') quantity: any;
  @Output() addedProduct: EventEmitter<Product> = new EventEmitter<Product>()
  private productsSubject: Subject<string | null> = new Subject<string | null>();
  searchOptions: ProductSearch = new ProductSearch();
  product: Product = new Product();
  products: Observable<Product[]> = new Observable<Product[]>();
  showSuggest: boolean = false;
  
  constructor(@Inject('ProductService') private productService: ApiInterface) {
  }
  
  ngOnInit(): void {
    this.productsSubject.pipe(debounceTime(500)).subscribe((filter) => {
      if (filter == '') {
        this.clearSearch();
        return;
      }
      this.searchOptions.getFilter('name').value = filter ?? '';
      this.productService.get(this.searchOptions).subscribe((response) => {
        this.showSuggest = true;
        this.products = of(response.data);
      })
    })
  }
  
  search() {
    this.productsSubject.next(this.product.name);
  }
  
  clearSearch() {
    this.showSuggest = false;
    this.products = of([]);
    return;
  }
  
  selectItem(product: Product) {
    this.product = product;
    this.clearSearch();
    this.quantity.nativeElement.focus();
  }
  
  sumTotal() {
    const number = new DecimalPipe('en-US')
    this.product.total = parseFloat(number.transform(this.product.quantity * this.product.price, '1.2-2') || '0');
  }
  
  addProduct(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.addedProduct.emit(this.product);
    this.product = new Product();
  }
}
