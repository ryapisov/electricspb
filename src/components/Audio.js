import styled from 'styled-components'
import music from '../music/ppk.mp3'
import { device } from '../device/breakpoint'


const Audio = styled.div`

`

export default ({children})=>{
  return <Audio>{children}</Audio>
}