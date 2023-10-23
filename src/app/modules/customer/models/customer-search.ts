import {ApiSearch} from "../../../services/ApiSearch";

export class CustomerSearch extends ApiSearch{
  override searchTerms: { label: string; filterName: string; value: string }[] = [
    {filterName: 'name', label: 'Name', value: ''},
  ];
}
