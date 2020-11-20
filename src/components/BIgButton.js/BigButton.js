import styled from 'styled-components'
import { device } from '../../device/breakpoint'

const BigButton = styled.button`
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
  z-index:5;
  &:hover{
    cursor:pointer;
    background-color:#ff4d00;
    color: #fff;
  }
`
export default ({children})=>{
  return <BigButton>{children}</BigButton>
}