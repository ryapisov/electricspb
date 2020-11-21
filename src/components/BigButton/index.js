import { Button } from './styles'

export default ({children, onClick}) => {
  return <Button onClick={onClick}>{children}</Button>
}