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
    animation: wobble 1s 1;
    @keyframes wobble {
      25% {
        transform: rotate(15deg);
      }
      50% {
        transform: rotate(-30deg); 
      }
      75% {
        transform: rotate(5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
  animation: show 0.5s 1;
  @keyframes show {
    0% {
      transform: translateX(-100%);
    }
    5% {
      transform: translateX(-95%);
    }
    10% {
      transform: translateX(-90%);
    }
    15% {
      transform: translateX(-85%);
    }
    20% {
      transform: translateX(-80%);
    }
    25% {
      transform: translateX(-75%);
    }
    30% {
      transform: translateX(-70%);
    }
    35% {
      transform: translateX(-65%);
    }
    40% {
      transform: translateX(-60%);
    }
    45% {
      transform: translateX(-55%);
    }
    50% {
      transform: translateX(-50%);
    }
    55% {
      transform: translateX(-45%);
    }
    60% {
      transform: translateX(-40%);
    }
    65% {
      transform: translateX(-35%);
    }
    70% {
      transform: translateX(-30%);
    }
    75% {
      transform: translateX(-25%);
    }
    80% {
      transform: translateX(-20%);
    }
    85% {
      transform: translateX(-15%);
    }
    90% {
      transform: translateX(-10%);
    }
    95% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(-0%);  
    }
  }
`

export const Article = styled(Div) ` 
  left: -100%;
`

export const Section = styled.section ` 
  width: 140px;
  height: 100%;
  position: fixed;
  background-color: ${BLUE};
  padding-top: 35px;
`

