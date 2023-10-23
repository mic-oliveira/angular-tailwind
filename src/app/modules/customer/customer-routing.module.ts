import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomerComponent} from "./pages/list-customer/list-customer.component";
import {FormCustomerComponent} from "./pages/form-customer/form-customer.component";

const routes: Routes = [
  {path: '', component: ListCustomerComponent},
  {path: ':id', component: FormCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
