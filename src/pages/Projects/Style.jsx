import styled from 'styled-components';
import { RED, BLACK, device } from '../../components/StyleAll';

export const Section = styled.section `
  background-color: ${BLACK};
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  h1 {
    color: ${RED};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 3%;
    @media ${device.laptop} {
      padding-bottom: 2%;
    }
  }
  @media ${device.mobileS} {
    padding-top: 4%;
  }
  @media ${device.tablet} {
    padding-top: 2%;
  }
`

export const Article = styled.article `
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  span {
    margin: auto;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptop} {
    padding-left: 3%;
    padding-right: 3%;
  }
`