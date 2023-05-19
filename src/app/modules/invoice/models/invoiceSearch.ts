import {ApiSearch} from "../../../services/ApiSearch";

export class InvoiceSearch extends ApiSearch {

  override searchTerms: { label: string; filterName: string; value: string }[] = [
    {filterName: 'email', label: 'Email, name or CPF', value: ''},
  ];

}
