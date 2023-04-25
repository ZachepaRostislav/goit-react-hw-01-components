import React from 'react';
import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendsItem,
  ItemSpan,
  ItemImg,
  ItemName,
} from './FriendList.styled';
export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ avatar, id, isOnline, name }) => {
        return (
          <FriendsItem key={id}>
            <ItemSpan isOnline={isOnline}></ItemSpan>
            <ItemImg src={avatar} alt="User avatar" width="48" />
            <ItemName>{name}</ItemName>
          </FriendsItem>
        );
      })}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
