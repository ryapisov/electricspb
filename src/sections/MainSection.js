import React from 'react'
import VideoBanner from '../components/VideoBanner/Video'
import { MainTitle, Phone, Email, Info, Name, BigButton } from '../components'

export default ()=>{

  return (
    <>
      <VideoBanner />

      <MainTitle size="3" padding="0.3" opacity="1" t="50" l="5">
        ЭЛЕКТРИК СПБ
      </MainTitle>

      <Name size="1" padding="0.5"  t="43" l="10">
         Александр Иванов
      </Name>

      <Info size="1" padding="0.5" opacity="4" t="67" l="30">
         Электромонтажные работы в квартирах, домах, офисах.
      </Info>

      <BigButton size="1" padding="0.5" opacity="3" t="20" l="100">
        Видео работ
      </BigButton>

      <Phone size="1" padding="0.5" opacity="3" t="8" l="100">
        +7 965 046-59-39
      </Phone>

      <Email size="1" padding="0.5" opacity="3" t="20" l="100">
        gremm87@yandex.ru
      </Email>
      
    </>
  )
}