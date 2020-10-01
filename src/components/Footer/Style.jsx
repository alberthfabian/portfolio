import styled from 'styled-components';
import { WHITE, RED } from '../StyleAll';

export const FooterStyle = styled.footer `
    background-color: #1F2233;
    height: 130px;
    padding: 0.7%;
    text-align: center;
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
`;

export const Instagram = styled.img `
  height: 30px;
`;

