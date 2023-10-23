import {Component, Inject, OnInit} from '@angular/core';
import {BehaviorSubject, debounceTime, Observable, of} from "rxjs";
import {Product} from "../../models/Product";
import {ApiInterface} from "../../../../services/api-interface";
import {ProductSearch} from "../../models/ProductSearch";
import Echo from "laravel-echo";
import {environment} from "../../../../../environments/environment";
import {LaravelPage} from "../../../../shared/models/laravel-page";
import {LaravelMeta} from "../../../../shared/models/laravel-meta";
import {LaravelPaginatorService} from "../../../../services/laravel-paginator-service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products: Observable<Product[]> = new Observable<Product[]>();
  search: ProductSearch = new ProductSearch();
  searchProduct: BehaviorSubject<string> = new BehaviorSubject<string>('');
  meta: LaravelMeta = new LaravelMeta();
  
  constructor(@Inject('ProductService') private service: ApiInterface, private paginationService: LaravelPaginatorService) {
  }
  
  ngOnInit(): void {
    const echo = new Echo({
      broadcaster: 'pusher',
      key: environment.socket_app_key,
      cluster: 'us2',
      wsHost: 'localhost',
      wsPort: 6001,
      wssPort: 443,
      forceTLS: false,
      enabledTransports: ['ws', 'wss'],
      auth: {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    });
    console.log(echo)
    this.searchProduct.pipe(debounceTime(500)).subscribe((value) => {
      this.service.get(this.search).subscribe((data: LaravelPage) => {
        this.products = of<any>(data.data);
        this.meta = data.meta;
        this.paginationService.updatePagination(data);
      });
    });
    echo.channel('onlineUser.1').listen('onlineUser.1', (data: any) => console.log(data))
  }
  
  changePage(selectPage: number) {
    this.search.page = (selectPage).toString();
    this.searchProduct.next('');
  }
}
