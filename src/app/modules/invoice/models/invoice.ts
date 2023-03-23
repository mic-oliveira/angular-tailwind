export interface Invoice {
  id: string;
  total_amount: number;
  status: string;
  email: string;
  products: [any];
}
