import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 350px;
  margin: 100px auto;
  padding-top: 5px;
  background-color: #fff;
  border: 1px solid #000;
`;
export const SectionContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerImg = styled.img`
  width: 180px;
  height: 150px;
  margin-bottom: 5px;
`;

export const ContainerTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: 700;
`;

export const ContainerParagraph = styled.p`
  margin-bottom: 5px;
  color: #a4aeb8;
  font-size: 18px;
`;

export const ContainerList = styled.ul`
  width: 100%;
  height: 100%;
  background-color: #f3f6f9;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e9f0;
`;

export const ItemLabel = styled.span`
  color: #7d8d9c;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 2px;
`;
export const ItemQuantity = styled.span`
  color: #27394e;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0.7px;
`;
