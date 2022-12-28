import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from '../Transactions/components/SearchForm';
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 25,00</PriceHighLight>{' '}
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Aluguel do apartamento</td>
              <td>
                <PriceHighLight variant="outcome">
                  - R$ 12.000,00
                </PriceHighLight>
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
