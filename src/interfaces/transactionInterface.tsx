export interface Result {
  total:    number;
  page:     number;
  page_size: number;
  result:   Transaction[];
}

export interface Transaction {

  block_hash: string;
  block_number: string;
  block_timestamp: string;
  from_address: string;
  gas: string;
  gas_price: string;
  hash: string;
  input: string;
  nonce: string;
  receipt_contract_address: null;
  receipt_cumulative_gas_used: string;
  receipt_gas_used: string;
  receipt_root: null;
  receipt_status: string;
  to_address:string;
  transaction_index: string;
  transfer_index: string;
  value: string;
}
