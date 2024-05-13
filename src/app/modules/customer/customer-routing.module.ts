import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListCustomersComponent} from "./pages/customer/list-customers/list-customers.component";
import {CustomerComponent} from "./customer.component";

const routes: Routes = [
  { path: '', component: CustomerComponent, children: [
      { path: '', component: ListCustomersComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
