export interface SearchInterface {
  searchTerms: {
    label: string,
    filterName: string,
    value: string,
  }[]

  getFilter(filterName: string):{filterName: string, label: string, value: string}
  toURI(): string;
}
