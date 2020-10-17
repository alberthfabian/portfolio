import styled from 'styled-components';

export const I = styled.i ` 
  .my-float{
    margin-top:16px;
  }
`

export const A = styled.a ` 
  position:fixed;
  width:47px;
  height:47px;
  bottom:30px;
  right:30px;
  background-color:#25d366;
  color:#FFF;
  border-radius:50px;
  text-align:center;
  font-size:30px;
  box-shadow: 2px 2px 3px #999;
  z-index:100;
  &:hover {
    text-decoration: none;
    color: #25d366;
    background-color:#fff;
  }
`