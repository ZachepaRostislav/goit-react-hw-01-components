import React from 'react';
import PropTypes from 'prop-types';
import StatisticList from 'components/StatisticList';
import { Section, SectionTitle } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <SectionTitle>{title}</SectionTitle>}
      <StatisticList stats={stats} />
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
