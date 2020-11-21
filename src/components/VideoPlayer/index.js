import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Button } from '../../components'
import { Wrap, HeaderWrap, FooterWrap } from './styles'

export const VideoPlayer = () =>{
  const [onPlay, setOnPlay] = React.useState(true)

  return (
    <Wrap>
      <HeaderWrap>
        <Button className="mr" onClick={()=> setOnPlay(prev => !prev)}>
          { onPlay ?  'Остановить' : 'Продолжить' }
        </Button>
        <Button className="mr" onClick={()=>alert()}>Закрыть</Button>
      </HeaderWrap>

      <ReactPlayer 
        url='https://youtu.be/r4supD4BvHc' 
        width="100%" 
        height="100%"
        controls="true"
        playing={onPlay}
      />

      <FooterWrap>
        footer
      </FooterWrap>
    </Wrap>
    
  )
}