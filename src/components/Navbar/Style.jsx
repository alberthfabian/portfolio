import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, RED, device} from '../StyleAll';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Li = styled.li `
  list-style:none;
  margin-left: 10px;
`;

export const Ul = styled.ul `
  display: flex;
`;

export const P = styled.p `
  color: ${WHITE};
  font-family: 'Roboto', sans-serif;

  &:hover {
  color: ${RED};
  }
`;

export const Nav = styled.nav `
  @media ${device.mobileS} { 
  display: none;
}

@media ${device.tablet} { 
  display: block;
  }
`;