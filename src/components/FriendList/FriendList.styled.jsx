import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  color: #525c63;
`;

export const ItemSpan = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${friends => (friends.isOnline ? 'green' : 'red')};
`;

export const ItemName = styled.p`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 700;
  color: #525c63;
`;

export const ItemImg = styled.img``;
