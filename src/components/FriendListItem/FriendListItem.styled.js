import styled from '@emotion/styled';

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