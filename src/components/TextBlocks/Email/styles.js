import styled from 'styled-components'
import { media } from '../../../constants/breakpoint'

export const Wrap = styled.div`
  position:absolute;
  overflow:hidden;
  background-color: rgba(0, 0, 30, 0.${p => p.opacity ? p.opacity : 0 } );
  -webkit-user-select: none;
  border-radius: 4px;
  font-family: Russo One, sans-serif;
  -webkit-text-stroke: 1px black;
  color: #fff;
  z-index:5;


  ${media.desktop}{}

  ${media.laptopL}{
    font-size: ${ p => 2 * p.size + 'rem' };
    padding: ${ p => 2 * p.padding + 'rem' };
    top:${ p => 10 * p.top + 'px' };
    left:${ p => 10 * p.left + 'px' };
  }
`