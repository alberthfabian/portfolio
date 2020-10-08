import styled from 'styled-components';
import { WHITE, RED, device } from '../StyleAll';

export const FooterStyle = styled.footer `
  background-color: #1F2233;
  height: 130px;
  text-align: center;
  margin-top: -21px;
  padding-top: 2%;
  @media ${device.mobileS} { 
    padding-top: 6%;
  }
  @media ${device.tablet} { 
    padding-top: 3%;
  }
  @media ${device.laptopL} { 
    padding-top: 2%;
  }
`;

export const P = styled.p `
  color: ${WHITE};
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
`;

export const Name = styled.p `
  color: ${RED};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
`;

export const LinkedIn = styled.img `
  height: 30px;
  margin-right: 10px;
`;

export const Instagram = styled.img `
  height: 30px;
`;

