import styled from 'styled-components';
import { WHITE, RED, device } from '../../components/StyleAll';

export const Div = styled.div `
  display: flex;
  justify-content: center;
`;

export const Mountains = styled.img `
  width: 100%;
  height: 600px;
`;

export const Photo = styled.img `
  width: 280px;
  height: 280px;
  position: absolute;
  margin-top: 3%;
  border-radius:150px;
  -webkit-box-shadow: 0px 0px 17px 0px rgba(158,42,43,0.62);
  -moz-box-shadow: 0px 0px 17px 0px rgba(158,42,43,0.62);
  box-shadow: 0px 0px 17px 0px rgba(158,42,43,0.62);
  @media ${device.mobileS} { 
    width: 200px;
    height: 200px;
    margin-top: 45%;
  }
  @media ${device.mobileM} { 
    width: 200px;
    height: 200px;
    margin-top: 40%;
  }
  @media ${device.tablet} { 
    width: 280px;
    height: 280px;
    margin-top: 14%;
  }
  @media ${device.laptop} { 
    margin-top: 9%;
  }
  @media ${device.desktop} { 
    margin-top: 5%;
  }
`;

export const Name = styled.p `
  font-family: 'Roboto', sans-serif;
  color: ${WHITE};
  text-align: center;
  font-size: xx-large;
  @media ${device.mobileS} { 
    font-size: x-large;
  }
  @media ${device.laptop} { 
    font-size: xx-large;
  }
`;

export const Frontend = styled.p `
  font-family: 'Roboto', sans-serif;
  color: ${WHITE};
  text-align: center;
  font-size: x-large;
  @media ${device.mobileS} { 
    font-size: small;
  }
  @media ${device.mobileM} { 
    font-size: large;
  }
`;

export const Data = styled.div `
  position: absolute;
  top: 65%;
  @media ${device.mobileS} { 
    top: 67%;
  }
  @media ${device.mobileL} { 
    top: 72%;
  }
  @media ${device.tablet} { 
    top: 80%;
  }
  @media ${device.laptop} { 
    top: 62%;
  }
  @media ${device.laptopL} { 
    top: 43%;
  }
  @media ${device.desktop} { 
    top: 23%;
  }
`;