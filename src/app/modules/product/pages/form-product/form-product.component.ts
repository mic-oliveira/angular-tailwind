import {Component, Inject, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../../../services/api/product.service";
import {ApiInterface} from "../../../../services/api-interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  product: Product = new Product();
  
  
  constructor(@Inject('ProductService') _service: ApiInterface, private _activatedRoute: ActivatedRoute) {
    const id = _activatedRoute.snapshot.paramMap.get('id');
    if (id)
      _service.find(id).subscribe((response: any) => {
        console.log(response)
        this.product = response.data;
      });
  }
  
  ngOnInit(): void {
  }
  
  submitForm() {
    
  }
}
