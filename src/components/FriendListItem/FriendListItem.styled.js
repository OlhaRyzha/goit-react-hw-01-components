import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: ${({ theme }) => theme.spacing(5)};
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  text-transform: capitalize;
`;
