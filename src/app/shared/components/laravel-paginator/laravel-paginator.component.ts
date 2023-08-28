import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LaravelPaginatorService} from "../../../services/laravel-paginator-service";
import {LaravelMeta} from "../../models/laravel-meta";
import {LaravelPage} from "../../models/laravel-page";

@Component({
  selector: 'laravel-paginator',
  templateUrl: './laravel-paginator.component.html',
  styleUrls: ['./laravel-paginator.component.scss']
})
export class LaravelPaginatorComponent implements OnInit{
  @Input() offset: number = 5;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>()
  meta: LaravelMeta = new LaravelMeta();
  constructor(private paginationService: LaravelPaginatorService) {
  }

  ngOnInit(): void {
    this.paginationService.pageUpdater.subscribe((pagination: LaravelPage) => {
      this.meta = pagination.meta;
      this.meta.links = this.meta.links.filter((link: any) => link.label >= 1 && link.label <= this.meta.last_page)
      console.log(this.meta.links)
    })
  }

  current(page: number) {
    console.log(page)
    this.changePage.emit(page);
  }
}
