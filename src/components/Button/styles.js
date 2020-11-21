import styled from 'styled-components'

export const Buttons = styled.button`
  border:0px;
  border-radius:${ p => p.big ? '8px' : '4px' };
  padding:${ p => p.big ? '1.3' : '0.7' }rem;
  background:${ p => p.bg ? p.bg : '#ff4d00' };
  text-decoration: none;
  font-family: 'Russo One', sans-serif;
  font-size:${ p => p.big ? '1.8' : '1' }rem;
  color:${ p => p.color ? p.color : '#fff' };;
  &:hover{
    cursor:pointer;
    background:rgba(0, 0, 30, 0.8);
  }
`