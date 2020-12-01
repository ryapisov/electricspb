import React from 'react'
import { Text,Button, Triangle, VideoPlayer, VideoBanner, Logo } from '../../components'
import { Wrap, VideoWrap, VideoBannerWrap, WrapText } from './styles'

export const SectionMain = () => {
  const [onVideo, setOnVideo] = React.useState(false)
  
  return (
    <Wrap>
    { onVideo ? 
      <>
      {/* Component */}
      <VideoWrap>
        <VideoPlayer/> 
      </VideoWrap> 
      </>
     :
        <>
        {/* Component */}
        <VideoBannerWrap>
          <VideoBanner />
        </VideoBannerWrap>
       
        {/* Component */}
        <WrapText>
          <Triangle/>
        </WrapText>
        
        {/* Component */}
        <WrapText left="70" top="490">
          <Text opacity="2" size="7" kontur>
            ЭЛЕКТРИК СПБ
          </Text>
        </WrapText>

        {/* Component */}
        <WrapText left="822" top="233">
          <Text opacity="2">
          {/* Александр Иванов */}
          </Text>
        </WrapText>

        {/* Component */}
        <WrapText left="992" top="33">
          <Text opacity="9" size="2">
            +7 965 046-59-39
          </Text>
        </WrapText>

        {/* Component */}
        <WrapText left="285" top="240">
          <Button big onClick={ () => setOnVideo(true) }>
            Видео работ
          </Button>
        </WrapText>

        {/* Component */}
        <WrapText left="992" top="103">
          <Text opacity="4" size="1.3">
            gremm87@yandex.ru
          </Text> 
        </WrapText>
    
        {/* Component */}
        <WrapText left="20" top="125" z="6" angle="-45">
          <Text opacity="3" size="1.3" >
            Гарантия от 5 лет.
          </Text> 
        </WrapText>

        {/* Component */}
        <WrapText left="10" top="15" z="6" angle="-45">
          <Logo />
        </WrapText>

      </>
    }

  </Wrap>
  )
}


