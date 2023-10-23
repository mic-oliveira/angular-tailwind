import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InvoiceSearch} from "../../models/invoiceSearch";

@Component({
  selector: 'invoice-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Input('searchOptions') searchOptions!: InvoiceSearch;
  @Output('changeFilter') changerFilter = new EventEmitter<any>();
  
  public toggle: boolean = false;
  
  toggleOption() {
    this.toggle = !this.toggle;
  }
  
  emitChange() {
    this.changerFilter.emit('');
  }
}
