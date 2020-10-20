import styled from 'styled-components';
import { RED, BLUE, device } from '../../components/StyleAll';

export const Div = styled.div ` 
  width: 100%;
  height: 100%;
  background-color: ${BLUE};
  h1 {
    color: ${RED};
    font-family: 'Roboto',sans-serif;
    text-align: center;
    margin: 0px;
  }
  @media ${device.mobileS} {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const Section = styled.section ` 
  display: grid;
  grid-gap: 20px;
  section {
    @media ${device.mobile} {
      padding: 30px 30px 30px 30px;
    }
    @media ${device.mobileM} {
      padding: 30px 35px 30px 35px;
    }
    @media ${device.mobileL} {
      padding: 30px 40px 30px 40px;
    }
    @media ${device.tablet} {
      padding: 30px 50px 30px 50px;
    }
    @media ${device.laptop} {
      padding: 40px 80px 40px 80px;
    }
    @media ${device.laptopL} {
      padding: 50px 100px 50px 100px;
    }
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

