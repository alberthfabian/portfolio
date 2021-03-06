import styled from 'styled-components';
import { WHITE, RED } from '../StyleAll';

export const FooterStyle = styled.footer `
  background-color: #1F2233;
  height: 130px;
  text-align: center;
  margin-top: -25px;
  padding-top: 8px;
`;

export const P = styled.p `
  color: ${WHITE};
  font-family: 'Roboto', sans-serif;
  margin-top: 10px;
`;

export const Name = styled.p `
  color: ${RED};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 10px;
`;

export const LinkedIn = styled.img `
  height: 30px;
  margin-right: 10px;
  &:hover {
    height: 35px;
  }
`;

export const Instagram = styled.img `
  height: 30px;
  margin-right: 10px;
  &:hover {
    height: 35px;
  }
`;

export const Facebook = styled.img `
  height: 30px;
  margin-right: 10px;
  &:hover {
    height: 35px;
  }
`;

export const Twitter = styled.img `
  height: 30px;
  margin-right: 10px;
  &:hover {
    height: 35px;
  }
`;

export const GitHub = styled.img `
  height: 30px;
  margin-right: 10px;
  &:hover {
    height: 32px;
  }
`;

