import styled from 'styled-components'
import { Audio } from './styles'
import music from '../../music/ppk.mp3'

export default (props)=>{
  const { t, l } = props

  return( 
    <>
      <Audio  top={t} left={l}/>
      <audio controls="controls" style={{display:'none'}}>
        <source src={music} type="audio/mpeg"/>
      </audio>
    </>
  )
}