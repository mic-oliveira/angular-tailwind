import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Paginate} from "./paginate";
import {PaginatorService} from "./paginator.service";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  private pagination = new Paginate();
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>()
  pages: any
  currentPage: number = this.pagination.current_page - 1;
  offsetPageMin: number = this.pagination.offsetMin - 1;
  offsetPageMax: number = this.pagination.offsetMax - 1;
  teste: 'TESTE' | 'dasdasdas' = 'TESTE';
  
  
  constructor(private readonly paginationService: PaginatorService) {
  }
  
  ngOnInit(): void {
    this.paginationService.data$.subscribe((paginate) => {
      this.pagination.total = paginate.total;
      this.pagination.last_page = paginate.last_page;
      this.pagination.offset = 5;
      this.pagination.current_page = paginate.current_page;
      this.pages = Array.from({length: this.pagination.last_page}, (value: Paginate, key: number) => key);
    })
  }
  
  
  next() {
    this.pagination.next();
    this.updateOffset();
  }
  
  previous() {
    this.pagination.previous();
    this.updateOffset();
  }
  
  updateOffset() {
    this.offsetPageMax = this.pagination.offsetMax;
    this.offsetPageMin = this.pagination.offsetMin;
  }
  
  current(selectedPage: number) {
    console.log(selectedPage, this.currentPage, this.pagination)
    this.currentPage = selectedPage;
    this.changePage.emit(selectedPage)
  }
}
