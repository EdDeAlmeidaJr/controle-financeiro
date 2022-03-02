export default interface FinancialRecord {
  year: number;
  month: number;
  day: number;
  credit: number;
  debit: number;
  description: string;
  inserted: string;
  userInserted: number;
  updated: string;
  userUpdated: number;
}