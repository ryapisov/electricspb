import { Wrap } from './styles'

export const Text = (props) => {
  const { children, opacity, size, kontur, angle } = props

  return(
    <Wrap opacity={opacity} size={size} kontur={kontur} angle={angle}>
      {children}
    </Wrap>
  )
}