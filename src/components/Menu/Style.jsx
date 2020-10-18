import styled from 'styled-components';
import { device } from '../StyleAll';

export const Div = styled.div ` 
  display: flex;
  align-items: center;
  margin-right: 10px;
  button {
    border: 0px;
    padding: 0px;
    background-color: transparent;
    img {
      width: 35px;
    }
    :focus {
      outline: none;
    }
    :hover {
      cursor: pointer;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`