import styled from 'styled-components'

export const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.${p => p.opacity ? p.opacity : 0 } );
  font-size:${ p => p.size ? p.size : '1.2'}rem;
  font-family: Russo One, sans-serif;
  padding-top: ${ '0.2' }em;
  padding-right: ${ '0.4' }em;
  padding-bottom: ${ '0.2' }em;
  padding-left: ${ '0.4' }em;
  border-radius: 4px;
  letter-spacing: 1px;
  -webkit-text-stroke: ${ p => p.kontur ? '1' : '0' }px black;
  color:#fff;
`