import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACK, RED, WHITE, device } from '../../components/StyleAll';

export const Section = styled.section ` 
  background-color: ${BLACK};
  width: 100%;
  height: 100%;
  article {
    @media ${device.mobile} {
      padding: 30px 30px 30px 30px;
    }
    @media ${device.mobileM} {
      padding: 30px 35px 30px 35px;
    }
    @media ${device.mobileL} {
      padding: 30px 40px 30px 40px;
    }
    @media ${device.tablet} {
      padding: 30px 50px 30px 50px;
    }
    @media ${device.laptop} {
      padding: 40px 80px 40px 80px;
    }
    @media ${device.laptopL} {
      padding: 50px 100px 50px 100px;
    }
    div {
      display: flex;
      justify-content: center;
      img {
        border: 3px solid ${RED};
        border-radius: 10px;
        &:hover {
          box-shadow: 0px 0px 17px 0px ${RED};
        }
        @media ${device.mobileS} {
          width: 100%;
          height: 150px;
        }
        @media ${device.mobileM} {
          width: 100%;
          height: 200px;
        }
        @media ${device.mobileL} {
          width: 100%;
          height: 250px;
        }
        @media ${device.tablet} {
          width: 100%;
          height: 350px;
        }
        @media ${device.laptop} {
          width: 100%;
          height: 450px;
        }
        @media ${device.laptopL} {
          width: 100%;
          height: 650px;
        }
      }
    }
    h2 {
      color: ${RED};
      font-family: 'Roboto',sans-serif;
      text-align: center;
    }
    p {
      margin-left: 0px;
      margin-right: 0px;
      font-family: 'Roboto',sans-serif;
      color: ${WHITE};
      text-align: justify;
    }
  }
`

export const Return = styled(Link) ` 
  height: 20px;
  border: 3px solid ${RED};
  border-radius: 7px;
  background-color: ${BLACK};
  text-decoration: none;
  color: ${WHITE};
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 3px;
`