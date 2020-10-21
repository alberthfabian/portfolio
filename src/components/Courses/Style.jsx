import styled from 'styled-components';
import { RED, device } from '../StyleAll/'

export const Img = styled.img `

  /* max-height: 290px;  */
  border: 3px solid ${RED};
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 0px 17px 0px ${RED};
    cursor: pointer;
  }
  margin: center;
  transition: width 2s, height 2s;
  @media ${device.mobileS} {
    width: 240px;
    height: 180px;
  }
  @media ${device.mobileM} {
    width: 280px;
    height: 220px;
  }
  @media ${device.mobileL} {
    width: 320px;
    height: 260px;
  }
  @media ${device.laptop} {
    width: 300px;
    height: 220px;
  }
  @media ${device.laptopL} {
    width: 320px;
    height: 260px;
  }
`

export const Button = styled.button ` 
  border: 0px;
  padding: 0px;
  background-color: transparent;
  height: 100%;
  :focus {
      outline: none;
    }
`