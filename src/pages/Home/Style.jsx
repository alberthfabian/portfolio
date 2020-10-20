import styled from 'styled-components';
import { WHITE, RED, device } from '../../components/StyleAll';

export const Div = styled.div `
  display: flex;
  justify-content: center;
`;

export const Mountains = styled.img `
  width: 100%;
  height: 600px;
  @media ${device.mobileS} { 
    height: 500px;
  }
  @media ${device.mobileM} { 
    height: 500px;
  }
  @media ${device.laptop} { 
    height: 600px;
  }
`;

export const Photo = styled.img `
  width: 270px;
  height: 280px;
  position: absolute;
  margin-top: 3%;
  border-radius:150px;
  &:hover {
    -webkit-box-shadow: 0px 0px 17px 0px ${RED};
    -moz-box-shadow: 0px 0px 17px 0px ${RED};
    box-shadow: 0px 0px 17px 0px ${RED};
  }
  @media ${device.mobileS} { 
    width: 180px;
    height: 200px;
    margin-top: 17%;
  }
  @media ${device.mobileM} { 
    width: 180px;
    height: 200px;
    margin-top: 17%;
  }
  @media ${device.tablet} { 
    width: 220px;
    height: 240px;
    margin-top: 6%;
  }
  @media ${device.laptop} { 
    width: 260px;
    height: 280px;
    margin-top: 4%;
  }
  @media ${device.laptopL} { 
    margin-top: 4%;
  }
  @media ${device.desktop} { 
    margin-top: 2%;
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
  @media ${device.mobileS} { 
    top: 370px;
  }
  @media ${device.mobileM} { 
    top: 380px;
  }
  @media ${device.mobileL} { 
    top: 390px;
  }
  @media ${device.tablet} { 
    top: 390px;
  }
  @media ${device.laptop} { 
    top: 440px;
  }
  @media ${device.laptopL} { 
    top: 460px;
  }
  @media ${device.desktop} { 
    top: 460px;
  }
`;