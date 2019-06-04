import React, {useEffect} from 'react';
import styled from 'styled-components' 

const DrumPads = ({id, letter, src, handleClick, handleDisplay, handleKeydown}) => {

const audio = React.useRef(null);

useEffect(() =>  {
       console.log(audio.id)
       document.addEventListener('keydown', handleKeydown)
       window.focus()
       return () => {
              document.removeEventListener('keydown', handleKeydown)
             }
           }, []); 
   

handleKeydown = e => {
if(e.keyCode === letter.charCodeAt()) {
 audio.current.play()
 audio.current.currentTime = 0
 handleDisplay(id)
}
}

handleClick = () => {
audio.current.play()
audio.current.currentTime = 0
handleDisplay(id)
}

return (
<Pads 
       className='drum-pad' 
       id={id}
       onClick={handleClick}
>
<h1>{letter}</h1>
<audio id={letter}
       className='clip'
       src={src}
       ref={audio}
       ></audio>
</Pads>
)

}
                   

const Pads = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 1em;
 height: 10vh;
 width:5vw;
 border: 1px solid gray;
 background-color: #F0E68C;
`

export default DrumPads;
