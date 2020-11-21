import styled from 'styled-components'

export const Wrap = styled.section`
  position:relative;
  height:100vh;
  width:100wh;
`

export const VideoWrap = styled.div`
  position:relative;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index:0;
`

export const VideoBannerWrap = styled.div`
  position:absolute;
  position:relative;
  background:red;
  left:0;
  top:0;
  width:100%;
  height:100%;
  z-index: -2;
`

export const WrapText = styled.div`
  position:absolute;
  overflow:hidden;
  left:${ p => p.left ? p.left : '0'}px;
  top:${ p => p.top ? p.top : '0'}px;
  z-index: ${ p => p.z ? p.z : '5'};
  transform: rotate(${ p => p.angle ? p.angle : '0' }deg);
`