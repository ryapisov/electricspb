import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'

export default ()=>{
  return (
    <ReactPlayer 
      url='https://youtu.be/r4supD4BvHc' 
      width="100%" 
      height="100%"
      controls="true"
      playing="true"
    />
  )
}