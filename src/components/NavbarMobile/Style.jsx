import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, RED } from '../StyleAll';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Li = styled.li `
  list-style:none;
  margin-left: 10px;
`;

export const Ul = styled.ul `
  padding-left: 20px;
`;

export const P = styled.p `
  color: ${WHITE};
  font-family: 'Roboto', sans-serif;
  &:hover {
    color: ${RED};
  }
`;