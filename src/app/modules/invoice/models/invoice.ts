import {Product} from "../../product/models/Product";

export class Invoice {
  id: string | undefined = undefined;
  total_amount: number = 0;
  status: 'pending' | 'canceled' | 'paid' = "pending";
  email: string = '';
  products: Product[] = [];
  due_date: string = '';
  
  sumTotal() {
    this.total_amount = 0;
    this.products.map((p) => this.total_amount += p.total);
    return this.total_amount;
  }
}
