import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WHITE, RED, device} from '../StyleAll';

export const Head = styled.header `
  display: flex;
  justify-content: space-between;
  width: -webkit-fill-available;
  height: 80px;
  background-color: #1F2233;
  padding-left: 3%;
  padding-right: 3%;
  position: fixed;
  z-index: 20;
  @media ${device.desktop} { 
    width: 1287px;
  }
`;

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

export const Logo = styled.img `
  height: 70px;
  margin-left: 5%;
  margin-top: 5px;
`;