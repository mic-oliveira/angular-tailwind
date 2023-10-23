import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent {
  @Input('showModal') showModal: any = false;
  @Output('showModal') modalEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  close() {
    this.showModal = false;
    this.modalEmmiter.emit(false);
  }
}
