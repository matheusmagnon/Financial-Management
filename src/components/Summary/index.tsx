import { ArrowCircleUp } from 'phosphor-react';
import { ArrowCircleDown } from 'phosphor-react';
import { CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { useSummary } from '../../hooks/useSummary';

import { defaultTheme } from '../../styles/themes/default';
import { priceFormatter } from '../../utils/formatter';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme['green-300']} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme['red-300']} />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
