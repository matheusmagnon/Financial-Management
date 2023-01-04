import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface TransactionType {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: TransactionType[];
  fetchTransactions: (query: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      },
    });
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
