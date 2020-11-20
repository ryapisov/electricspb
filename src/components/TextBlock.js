import styled from 'styled-components'
import { device } from '../device/breakpoint'

const TextBlock = styled.div`
  position:absolute;
  width:501px;
  height:100%;
  color:#fff;
  font-family: 'Russo One', sans-serif;
  -webkit-text-stroke: 1px black;
  font-size:28px;
  top:350px;
  right:0px;
  z-index:5;
  padding:25px;
  -webkit-user-select: none;
  background-color: rgba(0, 0, 30, 0.2);
  border-radius:4%;
`


export default ({children})=>{
return <TextBlock>{children}</TextBlock>
}