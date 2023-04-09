import {Product} from "../../product/models/Product";

export class Invoice {
  id: string | undefined = undefined;
  total_amount: number = 0;
  status: 'pending' |  'canceled' |  'paid' = "pending";
  email: string = '';
  products: Product[] = [];
  due_date: string = '';
}
