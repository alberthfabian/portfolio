import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Head = styled.header `
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #1F2233;
  padding-left: 3%;
  padding-right: 3%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const Logo = styled.img `
  height: 70px;
  margin-left: 5%;
  margin-top: 5px;
  &:hover {
    height: 75px;
  }
`;