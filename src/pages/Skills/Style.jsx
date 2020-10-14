import styled from 'styled-components';
import { BLUE, WHITE, RED, device } from '../../components/StyleAll'

export const Div = styled.div `
  background-color: ${BLUE};
  width: 100%;
  height: 100%;
  @media ${device.mobileS} {
    margin-top: -22px;
    padding-bottom: 12%;
  }
  @media ${device.tablet} {
    margin-top: -22px;
    padding-bottom: 7%;
  }
  h1 {
    color: ${RED};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0px;
    @media ${device.mobileS} {
      padding-top: 7%;
    }
    @media ${device.tablet} {
      padding-top: 5%;
    }
    @media ${device.laptop} {
      padding-top: 3%;
    }
  }
  section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${device.laptopL} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    article {
      margin: 5%;
      h4 {
        color: ${WHITE};
        font-family: 'Roboto',sans-serif;
      }
    }
    span {
      display: flex;
      justify-content: center;
    }
  }
`