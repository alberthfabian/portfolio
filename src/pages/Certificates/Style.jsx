import styled from 'styled-components';
import { BLACK, device } from '../../components/StyleAll';

export const Div = styled.div `
  background-color: ${BLACK};
  padding-top: 1px;
  width: 100%;
  height: 100%;
  position: relative;
  @media ${device.mobileS} {
    padding-bottom: 15%;
  }
  @media ${device.tablet} {
    padding-bottom: 8%;
  }
  @media ${device.laptop} {
    padding-bottom: 6%;
  }
`