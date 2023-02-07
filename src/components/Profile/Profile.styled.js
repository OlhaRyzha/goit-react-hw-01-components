import styled from '@emotion/styled';

export const Card = styled.div`
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

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`;

export const CardImg = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 15px;
`;

export const CardName = styled.p`
font-size: ${({ theme }) => theme.fontSizes.large};
color: #000;
`;

export const List = styled.ul`
margin-top: 15px ;
  display: flex;
  justify-content: space-around;
  background:radial-gradient(circle, rgba(219,149,42,1) 12%, rgba(254,79,96,1) 75%);
`;

export const Item = styled.li`
  font-size: ${({ theme }) => theme.spacing(5)};
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  text-transform: capitalize;
`;
