import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResponsiveHelperComponent} from './components/responsive-helper/responsive-helper.component';
import {ClickOutsideDirective} from './directives/click-outside.directive';
import {DataTableComponent} from './components/data-table/data-table.component';
import {PaginatorComponent} from './components/paginator/paginator.component';
import {LaravelPaginatorComponent} from './components/laravel-paginator/laravel-paginator.component';

@NgModule({
  declarations: [ResponsiveHelperComponent, ClickOutsideDirective, DataTableComponent, PaginatorComponent, LaravelPaginatorComponent],
  imports: [CommonModule],
  exports: [ResponsiveHelperComponent, ClickOutsideDirective, DataTableComponent, PaginatorComponent, LaravelPaginatorComponent],
})
export class SharedModule {
}
