import styled from 'styled-components'

export const Wrap = styled.div`
  position:relative;
  left:0;
  top:0px;
  width:100%;
  height:100%;
`

export const HeaderWrap = styled.div`
  position:absolute;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  left:0;
  top:0;
  width:100%;
  height:60px;
  font-family: Russo One, sans-serif;
  color:#fff;
  background: black;
  z-index:1;

  & .mr{
    margin-right:3%;
  }
`
export const FooterWrap = styled.div`
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  height:50px;
  color:#fff;
  font-family: Russo One, sans-serif;
  background: black;
  z-index:1;
` 