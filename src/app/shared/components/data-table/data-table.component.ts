import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
@Input('title') title = 'Data table';
@Input('subtitle') subtitle = 'Subtitle';
@Input('headers') headers: Array<string> = [
  'id', 'name', 'amount'
];

@Input('items') items: any = [
  {id:1, name: 'teste', amount: 562}
];

  constructor() {

  }

}
