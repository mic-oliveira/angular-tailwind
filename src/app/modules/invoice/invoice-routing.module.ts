import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListInvoiceComponent} from "./pages/list-invoice/list-invoice.component";
import {FormInvoiceComponent} from "./pages/form-invoice/form-invoice.component";

const routes: Routes = [
  {path: '', component: ListInvoiceComponent},
  {path: ':id', component: FormInvoiceComponent},
  {path: '**', redirectTo: '/invoices'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {
}
