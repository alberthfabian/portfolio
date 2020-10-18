import styled from 'styled-components';
import { BLUE } from '../StyleAll';

export const Div = styled.div ` 
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(170 171 183 / 50%);;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  div {
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;
    button {
      border: 0px;
      padding: 0px;
      background-color: transparent;
      img {
        width: 25px;
      }
      :focus {
        outline: none;
      }
      :hover {
        cursor: pointer;
      }
    }
  }
`

export const Article = styled(Div) ` 
  left: -100%;
`

export const Section = styled.section ` 
  width: 140px;
  height: 600px;
  position: fixed;
  background-color: ${BLUE};
  padding-top: 35px;
`

