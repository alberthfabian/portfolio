import styled from 'styled-components';
import { BLACK, RED, device } from '../../components/StyleAll';

export const Section = styled.section `
  background-color: ${BLACK};
  padding-top: 1px;
  h1 {
    color: ${RED};
    text-align: center;
  }
  @media ${device.mobileS} {
    padding-bottom: 60px;
  }
`

export const Container = styled.div `
  display: grid;
  grid-gap: 20px;
  margin-top: 35px;
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const Div = styled.div ` 
  display: grid;
  grid-template-columns: 3fr 1fr; 
  align-items: center;
  margin: auto;
  border: 3px solid ${RED};
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px ${RED};
  width: 280px;
  height: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
`