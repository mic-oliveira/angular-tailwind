import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductsComponent} from "./pages/list-products/list-products.component";
import {FormProductComponent} from "./pages/form-product/form-product.component";

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: ':id', component: FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
