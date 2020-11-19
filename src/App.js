import video from './videos/720.mp4'
import styled from 'styled-components'
import './style.scss'
import 'normalize.css'

const Wrap = styled.div`
  position:relative;
`
const Mask = styled.div`
  &:after{
    content:'';
    height:650px;
    width:100%;
    display:block;
    position:absolute;
    background: rgba(96, 110,140, .5);
    top:0;
    left:0;
    z-index:2;
  }
`
const Video = styled.video`
  position:absolute;
  width:100%;
  height:auto; 
  top:0;
  left:0;
  z-index:1;
`

const Text = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  margin-top:540px;
  margin-left:70px;
  left:0;
  top:0;
  color:#fff;
  font-family: 'Russo One', sans-serif;
  -webkit-text-stroke: 2px black;
  opacity:0.8;
  font-size:75px;
  z-index:5;
`
const TextRight = styled.div`
  position:absolute;
  width:400px;
  height:500px;
  color:#fff;
  font-family: 'Russo One', sans-serif;
  -webkit-text-stroke: 1px black;
  font-size:32px;
  top:20px;
  right:0;
  z-index:5;
`

function App() {
  return (
    <Wrap>
      <Text>ЭЛЕКТРИК  СПБ</Text>
      <TextRight>+7 965 046-59-39</TextRight>
      <Mask>
        <Video  src={video} autoPlay muted loop></Video>
      </Mask>
    </Wrap>
  )
}

export default App;
