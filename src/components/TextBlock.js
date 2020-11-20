import styled from 'styled-components'
import { device } from '../device/breakpoint'

const Wrap = styled.div`
  position:absolute;
  overflow:hidden;
  background-color: rgba(0, 0, 30, 0.${ p=> p.opacity ? p.opacity : 2});
  width: ${ p => p.width ? p.width : '100' }px;
  height: ${ p => p.height ? p.height : '100' }px;
  top: ${ p => p.top ? p.top : 0 }px;
  left: ${ p => p.left ? p.left : 0 }px;
  padding: ${p => p.padding ? p.padding : '10px 10px 10px 10px'};
  border-radius: ${ p => p.radius ? p.radius : '0' }px;
  -webkit-user-select: none;
  z-index:5;
`

const Text = styled.div`
  font-family: 'Russo One', sans-serif;
  -webkit-text-stroke: 1px black;
  font-size: ${ p => p.size + 'px' };
  color: ${ p => p.color ? p.color : '#fff' };
`

export default (props)=>{
  const {
    children, size, color, w, h,
    bgColor, left, top, p, r, opacity
  } = props

  return(
    <Wrap 
      width={w}
      height={h}
      padding={p}
      radius={r}
      bgColor={bgColor}
      top={top}
      left={left}
      opacity={opacity}
      >
      <Text 
        size={size} 
        color={color}
      >
        {children}
     </Text>
    </Wrap>
  )
}