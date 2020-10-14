import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLUE, RED, WHITE, device } from '../../components/StyleAll';

export const Section = styled.section ` 
  background-color: ${BLUE};
  width: 100%;
  height: 100%;
  padding-top: 25px;
  padding-bottom: 50px;
  div {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    button {
      background-color: ${RED};
      border-radius: 8px;
      @media ${device.mobileS} {
        padding: 5px;
      }
    }
  }
  article {
    display: flex;
    justify-content: center;
  }
`

export const LinkButton = styled(Link) ` 
  text-decoration: none;
  font-family: 'Roboto',sans-serif;
  color: ${WHITE};
` 

export const Img = styled.img ` 
  width: 90%;
  border: 3px solid ${RED};
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px ${RED};
  @media ${ device.mobileS } {
    height: 250px;
  }
  @media ${ device.mobileM } {
    height: 260px;
  }
  @media ${ device.mobileL } {
    height: 270px;
  }
  @media ${ device.tablet } {
    height: 470px;
  }
  @media ${ device.laptop } {
    height: 700px;
  }
  @media ${ device.laptopL } {
    height: 900px;
  }
`