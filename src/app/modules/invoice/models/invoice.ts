export interface Invoice {
  id: string | undefined;
  total_amount: number;
  status: 'pending' |  'canceled' |  'paid';
  email: string;
  products: [any];
  due_date: string;
}
