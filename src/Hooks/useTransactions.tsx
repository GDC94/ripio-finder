import { useEffect, useState } from "react";
import { etherscanApi } from "../api/etherscanApi";
import { Transaction } from "../interfaces/transactionInterface";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const getTransactionsByAddress = async () => {
    const response = await etherscanApi.get(
      "?module=account&action=txlist&address=0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce&startblock=0&endblock=99999999&page=1&offset=10&sort=desc"
    );
    const transactionsResult = response.data.result;
    setTransactions(transactionsResult);
  };

  useEffect(() => {
    getTransactionsByAddress();
  }, []);

  return {
    transactions,
  };
};
