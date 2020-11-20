import React from 'react'
import styled from 'styled-components'
import MainSection from './sections/MainSection'
import BodySection from './sections/BodySection'
import FooterSection from './sections/FooterSection'

const Wrap = styled.main`
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
`

const Main = styled.section`
  position:relative;
  height:100vh;
  width:100wh;
`

const Body = styled.section`
  background: #155;
  position:relative;
  height:100vh;
`

const Footer = styled.section`
  background: #525;
  position:relative;
  height:100px;
`

function App() {
  return (
    <Wrap>
      <Main>
        <MainSection />
      </Main>
      <Body>
        <BodySection />
      </Body>
      <Footer>
        <FooterSection />
      </Footer>
    </Wrap>
  )
}

export default App
