import styled from 'styled-components';
import { RED, device } from '../StyleAll'

export const H1 = styled.h1 ` 
  color: ${RED};
  text-align: center;
  font-family: 'Roboto',sans-serif;
  margin-bottom: 2%;
` 
 export const Figure = styled.figure ` 
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  span {
    height: 100%;
  }
  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
 `

export const Section = styled.section ` 
text-align: center;
`