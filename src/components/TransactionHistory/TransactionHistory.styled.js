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

export const Table = styled.table`
  width: 100%;
  text-align: center;
`;
export const List = styled.thead`
  background-color: #3fc5c5;
  color: #fff;
  height: 40px;
  border-radius: ${({ theme }) => theme.spacing(4)};
`;
