import styled from 'styled-components';
import { RED, BLUE, WHITE, device } from '../../components/StyleAll';

export const Article = styled.article `
  div {
    img {
      width: 100%;
      border: 3px solid ${RED};
      border-radius: 10px;
      &:hover {
        box-shadow: 0px 0px 17px 0px ${RED};
      }
      @media ${device.mobileS} {
        height: 150px;
      }
      @media ${device.mobileM} {
        height: 180px;
      }
      @media ${device.mobileM} {
        height: 210px;
      }
      @media ${device.tablet} {
        height: 220px;
      }
      @media ${device.laptop} {
        height: 310px;
      }
      @media ${device.laptopL} {
        height: 380px;
      }
    }
  }
  h2 {
    color: ${RED};
    font-family: 'Roboto',sans-serif;
    text-align: center;
  }
  p { 
    height: 58px;
    font-family: 'Roboto',sans-serif;
    text-align: justify;
    color: ${WHITE};
    overflow: hidden;
  }
  button {
    font-family: 'Roboto',sans-serif;
    text-align: justify;
    border: 3px solid ${RED};
    border-radius: 7px;
    background-color: ${BLUE};
    color: ${WHITE};
    font-family: 'Roboto',sans-serif;
    &:hover {
      cursor: pointer;
    }
  }
`