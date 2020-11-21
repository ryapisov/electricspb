import { Video } from './styles'
import video from '../../videos/720.mp4'

export default ()=>{
  return (
    <>
      <Video 
        src={video} 
        autoPlay 
        muted 
        loop>
      </Video>
    </>
  )
}