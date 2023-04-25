import React from 'react';
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
