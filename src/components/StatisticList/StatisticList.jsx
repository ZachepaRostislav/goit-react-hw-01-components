import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ItemSpan } from './StatisticList.styled';

export default function StatisticList({ stats }) {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => {
        return (
          <ListItem key={id}>
            <ItemSpan>{label}</ItemSpan>
            <ItemSpan>{percentage}</ItemSpan>
          </ListItem>
        );
      })}
    </List>
  );
}

StatisticList.propTypes = {
  stats: PropTypes.array,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
