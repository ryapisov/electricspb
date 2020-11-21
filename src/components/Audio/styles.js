import styled from 'styled-components'

export const Audios = styled.div`
  position:absolute;
  top:${ p => 10 * p.top + 'px' };
  left:${ p => 10 * p.left + 'px' };
  z-index:5;

 // background-color: rgba(0, 0, 30, 0.7 );
 
			border-radius: 50%;
			box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204,198,197,.5);
			float:left;
			height: 70px;
			margin: 0 30px 30px 0;
			position: relative;
			width: 70px;			
			-webkit-transition: all .1s linear;
      transition: all .1s linear;
      
      &:after{
        color:#e9e6e4;
        content: "";
        display: block;
        font-size: 30px;
        height: 30px;
        text-decoration: none;
        text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
        position: absolute;
        width: 30px;
      }

      &:after{
        content: "\\1F50A";
        left:18px;
        top:18px;
      }
  
 
`

//      \1F507

//      \1F50A