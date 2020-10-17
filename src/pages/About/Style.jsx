import styled from 'styled-components';
import { WHITE, BLUE, RED, device } from '../../components/StyleAll';

export const Div = styled.div `
  background-color: ${BLUE};
  width: 100%;
  height: 600px;
  top: -16px;
  padding-bottom: 20%;
  @media ${device.mobileS} { 
    text-align: center;
    height: 625px;
  }
  @media ${device.mobileM} { 
    top: -23px;
    height: 625px;
    padding-bottom: 8%;
  }
  @media ${device.mobileL} { 
    top: -23px;
    height: 625px;
  }
  @media ${device.tablet} { 
    padding-bottom: 0;
    height: 445px;
  }
  @media ${device.laptop} { 
    height: 440px;
  }
  @media ${device.laptopL} { 
    height: 505px;
  }
`;

export const Section = styled.section `
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  @media ${device.mobileS} { 
    display: block;
    bottom: 0%;
    margin-right: 7%;
    margin-left: 7%;
  }
  @media ${device.mobileM} { 
    bottom: 5%;
  }
  @media ${device.mobileL} { 
    bottom: 5%;
  }
  @media ${device.laptop} { 
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 2fr;
    bottom: 6%;
    align-items: center;
    width: 100%;
    margin: 0px;
  }
  @media ${device.laptopL} { 
    position: static;
    height: 536px;
  }
`;

export const Img = styled.img `
  width: 100%;
  height: 600px;
`;

export const Photo = styled.img `
  @media ${device.mobileS} { 
    display: none;
  }
  @media ${device.laptop} { 
    display: inline;
    width: 270px;
    height: 320px;
    border-radius: 10%;
    margin-left: 15%;
    box-shadow: 0px 0px 17px 0px ${RED};
  }
`;

export const Info = styled.div `
  @media ${device.mobileS} { 
    margin: 0px;
  }
  @media ${device.laptop} { 
    margin-right: 7%;
  }
  h1 {
    color: ${RED};
    font-family: 'Roboto',sans-serif;
    font-size: large;
    @media ${device.mobileS} { 
      padding-top: 10%;
      margin-top: 0px;
      margin-right: 5%;
      margin-left: 5%;
    }
    @media ${device.tablet} { 
      padding-top: 5%;
    }
    @media ${device.laptop} { 
      text-align: left;
      margin: 0px;
    }
  }
  p {
    color: ${WHITE};
    font-family: 'Roboto',sans-serif;
    font-size: large;
    text-align: justify;
  }
`;

export const Data = styled.div `
  display: grid;
  border: 3px solid ${RED};
  border-radius: 10px;
  padding-left: 3%;
  padding-right: 3%;
  box-shadow: 0px 0px 17px 0px ${RED};
  margin-top: 40px;
  padding-top: 15px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr; 
    p {
      font-size: 15px;
    }
  }
  @media ${device.tablet} {
    p {
      text-align: left;
    }
  }
  @media ${device.tablet} { 
    grid-template-columns: 1fr 1fr;
    font-size: large;
  }
`;

export const Grid = styled.div `
  a {
    display: flex;
    text-decoration: none;
    img {
      height: 30px;
      margin-right: 20px;
      &:hover {
        box-shadow: 0px 0px 17px 0px ${RED};
      }
    }
    p {
      &:hover {
        box-shadow: 0px 0px 17px 0px ${RED};
      }
    }
  }
`