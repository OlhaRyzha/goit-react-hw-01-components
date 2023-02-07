import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  padding: 15px;
  width: ${({ theme }) => theme.spacing(100)};
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  font-size: ${({ theme }) => theme.spacing(5)};
  display: flex;
  gap: 15px;
  align-items: center;
  text-transform: capitalize;
`;
