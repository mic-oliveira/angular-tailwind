import {ApiSearch} from "../../../services/ApiSearch";

export class ProductSearch extends ApiSearch {
  
  override searchTerms: { label: string; filterName: string; value: string }[] = [
    {filterName: 'name', label: '', value: ''},
  ];
  
}
