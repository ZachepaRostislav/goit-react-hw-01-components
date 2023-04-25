import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  SectionContainer,
  ContainerImg,
  ContainerParagraph,
  ContainerTitle,
  ContainerList,
  ListItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Section>
      <SectionContainer>
        <ContainerImg src={avatar} alt="User avatar" />
        <ContainerTitle>{username}</ContainerTitle>
        <ContainerParagraph>@{tag}</ContainerParagraph>
        <ContainerParagraph>{location}</ContainerParagraph>
      </SectionContainer>

      <ContainerList>
        <ListItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </ListItem>
        <ListItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </ListItem>
      </ContainerList>
    </Section>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
