import React from 'react';
import PropTypes from 'prop-types';
import { TD } from './Transaction.styled';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <TD>{type}</TD>
      <TD>{amount}</TD>
      <TD>{currency}</TD>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
