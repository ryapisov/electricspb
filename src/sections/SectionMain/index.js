import React from 'react'
import { MainTitle, Phone, Email, Info, Name, BigButton, Audio, VideoPlayer, VideoBanner } from '../../components'
import { Wrap } from './styles'

export default () => {
  const [onVideo, setOnVideo] = React.useState(false)
  
  return (
    <Wrap>
    { onVideo ?  <VideoPlayer/> :
       <>
        <VideoBanner />

        <MainTitle size="3" padding="0.3" opacity="2" t="50" l="5">
          ЭЛЕКТРИК СПБ
        </MainTitle>

        <Name size="1" padding="0.5"  t="43" l="10">
          Александр Иванов
        </Name>

        <BigButton size="1" padding="0.5" opacity="3" t="20" l="100" onClick={ () => setOnVideo(true) }>
          Видео работ
        </BigButton>

        <Phone size="1" padding="0.5" opacity="3" t="8" l="100">
          +7 965 046-59-39
        </Phone>

        <Email size="1" padding="0.5" opacity="3" t="20" l="100">
          gremm87@yandex.ru
        </Email>

        <Audio  t="15" l="15" />




       </>
    }

   



    



  </Wrap>
  )
}