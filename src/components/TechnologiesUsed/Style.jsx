import styled from 'styled-components';
import { WHITE, BLUE, RED, device } from '../StyleAll'

export const Figure = styled.figure `
  margin: auto;
  figcaption {
    margin: auto;
    text-align: center;
    padding-bottom: 3%;
    color: ${WHITE};
    font-family: 'Roboto', sans-serif;
    font-size: large;
  }
`
export const Technologies = styled.div `
  background-color: ${BLUE};
  height: 170px;
  margin: 0px;
  border-radius: 10px;
  padding-bottom: 3%;
  position: relative;
  top: -22px;
  box-shadow: 0px 0px 17px 0px ${RED};
  h2 {
    text-align: center;
    padding-top: 5%;
    color: ${WHITE};
    font-family: 'Roboto', sans-serif;
  }
  ul {
    li {
      font-family: 'Roboto', sans-serif;
      color: ${WHITE};
    }
  }
`

export const Img = styled.img `
  width: 250px;
  height: 250px;
  border: 3px solid ${RED};
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px ${RED};
  margin: center;
  @media ${device.tablet} {
    width: 300px;
    height: 300px;
  }
  @media ${device.laptop} {
    width: 280px;
    height: 280px;
  }
  @media ${device.laptopL} {
    width: 350px;
    height: 350px;
  }
`