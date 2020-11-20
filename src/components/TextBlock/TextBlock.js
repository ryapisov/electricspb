import styled from 'styled-components'
import {Wrap, Text} from './TextBlockStyles'

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