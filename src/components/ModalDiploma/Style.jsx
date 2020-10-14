import styled from 'styled-components';
import { RED, device } from '../StyleAll';

export const Div = styled.div ` 
  background-color: rgba(31, 34, 51, 0.8);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20;
`

export const Article = styled.article ` 
  width: 90%;
  position: relative;
  border: 3px solid ${RED};
  box-shadow: 0px 0px 17px 0px ${RED};
  border-radius: 10px;
  margin-left: 10%;
  margin-top: 70px;
  @media ${device.mobileS} {
    margin-left: 5%;
    height: 200px;
  }
  @media ${device.mobileM} {
    margin-left: 5%;
    height: 250px;
  }
  @media ${device.mobileL} {
    margin-left: 5%;
    height: 300px;
  }
  @media ${device.tablet} {
    height: 500px;
  }
  @media ${device.laptop} {
    height: 750px;
  }
  @media ${device.laptopL} {
    height: 850px;
  }
`

export const Img = styled.img ` 
  width: 100%;
  height: 100%;
  border-radius: 8px;
`

export const Button = styled.button ` 
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media ${device.mobileS} {
    right: 10px;
    border-radius: 50px;
    margin-top: 5px;
    width: 20px;
    height: 20px;
    padding: 1px 1px;
  }
  @media ${device.tablet} {
    right: 10px;
    border-radius: 50px;
    margin-top: 5px;
    padding: 3px 3px;
    width: 25px;
    height: 25px;
  }
  @media ${device.laptop} {
    right: 10px;
    border-radius: 50px;
    margin-top: 5px;
    padding: 4px 4px;
    width: 28px;
    height: 28px;
  }
`