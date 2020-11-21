import { Buttons } from './styles'

export const Button = ({children, onClick, big, className}) => {
  return <Buttons className={className} onClick={onClick} big={big}>{children}</Buttons>
}