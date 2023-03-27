import {SearchInterface} from "./search-interface";

export abstract class ApiSearch implements SearchInterface{
  searchTerms!: { label: string; filterName: string; value: string }[];

  toURI(): string {
    return '?'+this.searchTerms.map((filter, index) => {
      return `filter[${filter.filterName}]=${filter.value}`;
    }).join('&').toString();
  }

  getFilter(filterName: string): {filterName: string, label: string, value: string}
  {
    return this.searchTerms.filter((filter: any) => filter.filterName == filterName)[0];
  }

}
