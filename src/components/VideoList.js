import styled from 'styled-components'
import { device } from '../device/breakpoint'

const VideoList = styled.video`
  position:absolute;
  width:100%;
  height:auto; 
  top:0;
  left:0;
  z-index:1;
`
export default ({children})=>{
  return <VideoList>{children}</VideoList>
}