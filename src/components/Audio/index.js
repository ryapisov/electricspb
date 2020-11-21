import styled from 'styled-components'
import { Audios } from './styles'
import music from '../../music/ppk.mp3'

export const Audio = (props) => {
  const { t, l } = props

  return( 
    <>
      <Audios  top={t} left={l}/>
      <audio controls="controls" style={{display:'none'}}>
        <source src={music} type="audio/mpeg"/>
      </audio>
    </>
  )
}