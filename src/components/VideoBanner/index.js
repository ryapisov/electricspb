import video from '../../static/videos/720.mp4'
import { Video } from './styles'

export const VideoBanner = () =>{
  return (
    <Video
      src={video} 
      autoPlay 
      muted 
      loop>
    </Video>
  )
}