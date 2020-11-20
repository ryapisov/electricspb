import video from '../videos/720.mp4'
import styled from 'styled-components'

const ColorFilter = styled.div`
  position:absolute;
  width:100%;
  height:90%;
  left:0;
  top:0;
  background: rgba(0, 0, 30, 0.2);
  z-index:-1;
`

const VideoBanner = styled.video`
  position:absolute;
  width:100%;
  height:auto;
  left: 0;
  top: 0;
  z-index: -2;
`

export default ()=>{
  return (
    <>
     
      <VideoBanner 
        src={video} 
        autoPlay 
        muted 
        loop>
      </VideoBanner>
    </>
  )
}