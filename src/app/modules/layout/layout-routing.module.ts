import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'invoices',
    component: LayoutComponent,
    loadChildren: () => import('../invoice/invoice.module').then((m) => m.InvoiceModule)
  },
  {
    path: 'products',
    component: LayoutComponent,
    loadChildren: () => import('../product/product.module').then((m) => m.ProductModule)
  },
  { path: '', redirectTo: 'invoices', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
