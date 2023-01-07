import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { v4 as uuidv4 } from 'uuid';

interface TransactionType {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
}

interface TransactionContextType {
  transactions: TransactionType[];
  // fetchTransactions: (query: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => void;
  deleteTransaction: (transaction: TransactionType) => void;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([
    {
      description: 'Salário',
      price: 2500,
      category: 'Salário',
      type: 'income',
      createdAt: '2023-01-06T23:14:21.593Z',
      id: uuidv4(),
    },
    {
      description: 'Café da manhã',
      price: 18,
      category: 'Alimentação',
      type: 'outcome',
      createdAt: '2023-01-06T23:35:14.307Z',
      id: uuidv4(),
    },
    {
      description: 'Sandália',
      price: 45,
      category: 'Consumo',
      type: 'outcome',
      createdAt: '2023-01-06T23:35:54.695Z',
      id: uuidv4(),
    },
    {
      description: 'Chapinha',
      price: 200,
      category: 'Estética',
      type: 'outcome',
      createdAt: '2023-01-06T23:36:36.359Z',
      id: uuidv4(),
    },
    {
      description: 'Energia',
      price: 508,
      category: 'Despesa Fixa',
      type: 'outcome',
      createdAt: '2023-01-06T23:37:26.435Z',
      id: uuidv4(),
    },
  ]);

  // const fetchTransactions = async (query?: string) => {
  //   const response = await api.get('/transactions', {
  //     params: {
  //       _sort: 'createdAt',
  //       _order: 'desc',
  //       q: query,
  //     },
  //   });
  //   setTransactions(response.data);
  // };

  async function createTransaction(data: CreateTransactionInput) {
    const { category, description, price, type } = data;

    const newTransaction: TransactionType = {
      category,
      description,
      price,
      type,
      createdAt: new Date().toDateString(),
      id: uuidv4(),
    };
    // const response = await api.post('transactions', {
    //   description,
    //   price,
    //   category,
    //   type,
    //   createdAt: new Date(),
    // });
    console.log(data);

    setTransactions((state) => [newTransaction, ...state]);
  }

  const deleteTransaction = (transactionToDelete: TransactionType) => {
    setTransactions(
      transactions.filter(
        (transaction) => transaction.id !== transactionToDelete.id,
      ),
    );
    // fetchTransactions();
  };
  // useEffect(() => {
  //   fetchTransactions();
  // }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        // fetchTransactions,
        createTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
