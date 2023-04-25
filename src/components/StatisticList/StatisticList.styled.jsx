import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomHexColor};
  border: 1px solid #e4e9f0;
`;

export const ItemSpan = styled.span`
  font-size: 22px;
  color: #525c63;
`;
