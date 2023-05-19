import {SearchInterface} from "./search-interface";

export abstract class ApiSearch implements SearchInterface{
  searchTerms!: { label: string; filterName: string; value: string }[];
  page: string = '1';
  perPage: string = '15';

  toURI(): string {
    return '?'+this.searchTerms.map((filter, index) => {
      return `filter[${filter.filterName}]=${filter.value}`;
    }).concat([`page=${this.page}`, `per_page=${this.perPage}`]).join('&').toString();
  }

  getFilter(filterName: string): {filterName: string, label: string, value: string}
  {
    return this.searchTerms.filter((filter: any) => filter.filterName == filterName)[0];
  }

}
