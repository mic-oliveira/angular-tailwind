import {Component, Inject, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Product} from "../../models/Product";
import {ApiInterface} from "../../../../services/api-interface";
import {ProductSearch} from "../../models/ProductSearch";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit{
  products: Observable<Product[]> = new Observable<Product[]>();
  search: ProductSearch = new ProductSearch();


  constructor(@Inject('ProductService') service: ApiInterface) {

    service.get(this.search).subscribe((response: any) => {
      this.products = of(response.data);
    });
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

    echo.channel('onlineUser.1').listen('onlineUser.1', (data:any) => console.log(data))
  }
}
