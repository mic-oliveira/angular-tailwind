import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiInterface} from "../../../../services/api-interface";
import {Product} from "../../../product/models/Product";
import {debounceTime, Observable, of, Subject} from "rxjs";
import {ProductSearch} from "../../../product/models/ProductSearch";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit{
  @ViewChild('quantity') quantity: any;
  private productsSubject: Subject<string | null> = new Subject<string | null>();
  searchOptions: ProductSearch = new ProductSearch();
  product: Product = new class implements Product {
    description: string = '';
    id: string = '';
    name: string = '';
    price: number = 0;
    quantity: number = 1;
  };
  products: Observable<Product[]> = new Observable<Product[]>();
  showSuggest: boolean = false;
  constructor(@Inject('ProductService') private productService: ApiInterface) {
  }

  ngOnInit(): void {
    this.productsSubject.pipe(debounceTime(500)).subscribe((filter) => {
      if (this.searchOptions.getFilter('name').value === '') {
        this.clearSearch();
      }
      this.productService.get(this.searchOptions).subscribe((response) => {
        this.showSuggest = true;
        this.products = of(response.data);
      })
    })
  }

  search() {
    this.searchOptions.getFilter('name').value = this.product.name;
    this.productsSubject.next(null);
  }

  clearSearch() {
      this.showSuggest = false;
      this.products = of([]);
      return;

  }

  selectItem(product: Product) {
    console.log(product)
    this.product = product;
    this.clearSearch();
    this.quantity.nativeElement.focus();
  }
}
