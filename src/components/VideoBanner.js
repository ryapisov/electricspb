import video from '../videos/720.mp4'
import styled from 'styled-components'

// rgba(0, 0, 30, 0.2);


const VideoBanner = styled.div`
  
`

export default ()=>{
  return <VideoBanner src={video} autoPlay muted loop></VideoBanner>
}