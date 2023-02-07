import styled from '@emotion/styled';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
`;

export const CardName = styled.h2`
  text-align: center;
  margin: 10px 0;
`;

export const List = styled.ul`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
`;
export const Item = styled.li`
  font-size: ${({ theme }) => theme.spacing(5)};
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  text-transform: capitalize;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
`;
