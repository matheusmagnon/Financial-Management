import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { SearchForm } from '../Transactions/components/SearchForm';
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles';
import { Trash } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

export function Transactions() {
  const { transactions, deleteTransaction } = useContext(TransactionsContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                  <td>
                    <Trash
                      size={32}
                      onClick={() => deleteTransaction(transaction)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
