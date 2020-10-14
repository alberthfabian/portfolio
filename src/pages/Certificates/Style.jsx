import styled from 'styled-components';
import { BLACK, RED, device } from '../../components/StyleAll';

export const Div = styled.div `
  background-color: ${BLACK};
  padding-top: 1px;
  width: 100%;
  height: 100%;
  position: relative;
  h1 {
    color: ${RED};
    text-align: center;
    font-family: 'Roboto',sans-serif;
    margin-bottom: 2%;
  }
  figure {
    margin: 3%;
    text-align: center;
  }
  @media ${device.mobileS} {
    padding-bottom: 15%;
  }
  @media ${device.tablet} {
    padding-bottom: 8%;
  }
  @media ${device.laptop} {
    padding-bottom: 6%;
  }
  section {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    @media ${device.mobileS} {
      grid-template-columns: 1fr;
    }
    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`