import React from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import { SectionMain, SectionBody, SectionFooter } from './sections'

const Wrap = styled.main`
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
`

function App() {
  return (
    <Wrap>
      <Normalize />
      <SectionMain />
      <SectionBody />
      <SectionFooter />
    </Wrap>
  )
}

export default App
