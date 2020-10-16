import styled from 'styled-components';
import { WHITE } from '../StyleAll';

export const Article = styled.article ` 
  h3 {
    color: ${WHITE};
    font-family: 'Roboto',sans-serif;
  }
  a {
    text-decoration: none;
    margin: auto;
    p {
      color: ${WHITE};
      font-family: 'Roboto',sans-serif;
    }
  }
  p {
    color: ${WHITE};
    font-family: 'Roboto',sans-serif;
  }
`

export const Img = styled.img ` 
  margin: auto;
  width: 50px;
`

export const A = styled.a ` 
  margin: auto;
`