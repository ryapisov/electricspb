import styled from 'styled-components'

export const Button = styled.button`
  position:absolute;
  top:240px;
  left:285px;
  width: 250px;
  height: 80px;
  border-radius:4%;
  border:0px;
  text-decoration: none;
  color: #999;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  font-size: 26px;
  background:#ff4d00;
  color:#fff;
  z-index:5;
  &:hover{
    cursor:pointer;
    background: rgba(0, 0, 30, 0.8);
    color: #fff;
  }
`