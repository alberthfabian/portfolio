import styled from 'styled-components';
import { WHITE, RED, device} from '../../components/StyleAll';

export const Div = styled.div `
  position: relative;
  @media ${device.mobileS} { 
    text-align: center;
  }
`;

export const Section = styled.section `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  bottom: 17%;
  position: absolute;
  align-items: center;
  width: 100%;
  @media ${device.mobileS} { 
    display: block;
    bottom: 0%;
  }
  @media ${device.mobileM} { 
    bottom: 5%;
  }
  @media ${device.mobileL} { 
    bottom: 4%;
  }
  @media ${device.laptop} { 
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 2fr;
    bottom: 5%;
    position: absolute;
    align-items: center;
    width: 100%;
  }
`;

export const Img = styled.img `
  width: 100%;
  height: 600px;
`;

export const Photo = styled.img `
  /* width: 270px;
  height: 320px;
  border-radius: 10%;
  margin-left: 15%;
  box-shadow: 0px 0px 17px 0px rgba(158,42,43,0.62); */
  @media ${device.mobileS} { 
    display: none;
  }
  @media ${device.laptop} { 
    display: inline;
    width: 270px;
    height: 320px;
    border-radius: 10%;
    margin-left: 15%;
    box-shadow: 0px 0px 17px 0px rgba(158,42,43,0.62);
  }
`;

export const Info = styled.div `
  margin-right: 15%;
  h1 {
    color: ${RED};
    font-family: 'Roboto',sans-serif;
    font-size: large;
  }
  p {
    color: ${WHITE};
    font-family: 'Roboto',sans-serif;
    font-size: large;
    text-align: justify;
  }
  @media ${device.mobileS} { 
    margin: 5%;
  }
  @media ${device.mobileS} { 
    margin-right: 8%;
  }
`;

export const Data = styled.div `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  border: 3px solid ${RED};
  border-radius: 10px;
  padding-left: 3%;
  @media ${device.mobileS} { 
    display: block;
  }
  @media ${device.mobileL} { 
    margin-top: 10%;
  }
  @media ${device.tablet} { 
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
`;