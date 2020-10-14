import styled from 'styled-components';
import { RED, device } from '../StyleAll/'

export const Img = styled.img `
  height: 100%; 
  border: 3px solid ${RED};
  border-radius: 5px;
  box-shadow: 0px 0px 17px 0px ${RED};
  margin: center;
  transition: width 2s, height 2s;
  @media ${device.mobileS} {
    width: 90%;
  }
`