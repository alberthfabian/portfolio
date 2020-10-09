import styled from 'styled-components';
import { WHITE, RED, BLACK, BLUE, device } from '../../components/StyleAll';

export const Section = styled.section `
  background-color: ${BLACK};
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  h1 {
    color: ${RED};
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  @media ${device.mobileS} {
    padding-top: 8%;
    margin-top: -24px;
  }
  @media ${device.tablet} {
    padding-top: 3%;
    margin-top: -24px;
  }
`

export const Article = styled.article `
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
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
  @media ${device.laptopL} {
    width: 350px;
    height: 350px;
  }
`

export const Pokedex = styled.figure `
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

export const Babysitter = styled.figure `
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

export const Golden = styled.figure `
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