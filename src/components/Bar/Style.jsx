import styled from 'styled-components';
import { WHITE, RED } from '../StyleAll';

export const BarValue = styled.div `
  background-color: ${WHITE};
  border-radius: 10px;
  width: 280px;
  height: 20px;
  &:hover {
    box-shadow: 0px 0px 17px 0px ${RED};
  }
`

export const Value = styled.div `
  background-color: ${RED};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  height: 100%;
  p {
    color: ${WHITE};
    text-align: center;
    font-family: 'Roboto',sans-serif;
  }
`