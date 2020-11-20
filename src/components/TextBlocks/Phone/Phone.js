import { Wrap } from './PhoneStyles'

export default (props)=>{
  const {
    children, color, t, l, bgColor, padding, size, opacity
  } = props

  return(
    <Wrap 
      bgColor={bgColor}
      color={color}
      size={size}
      opacity={opacity}
      padding={padding}
      top={t}
      left={l}
      >
      {children}
    </Wrap>
  )
}