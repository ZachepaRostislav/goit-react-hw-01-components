import React from 'react';
import PropTypes from 'prop-types';
import Transaction from 'components/Transaction';
import { Table, TH } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
