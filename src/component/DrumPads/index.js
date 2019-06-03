import React, {useEffect} from 'react';
import styled from 'styled-components' 

const DrumPads = ({id, letter, audio, src, handleClick, handleDisplay, handleKeydown}) => {

useEffect(() =>  {
       console.log(audio)
       document.addEventListener('keydown', handleKeydown)
       window.focus()
       });
 
useEffect(() => {
       return () => {
        document.removeEventListener('keydown', handleKeydown)
       }
     }, []);   

handleKeydown = e => {
if(e.keyCode === letter.charCodeAt()){
audio.currentTime = 0
audio.play()     
handleDisplay(id)
}
}

handleClick = () => {
audio.play()
audio.currentTime = 0
handleDisplay(id)
}

return (
<div 
       className='drum-pad' 
       id={id}
       onClick={handleClick}
>
<h1>{letter}</h1>
<audio id={letter}
       className='clip'
       src={src}
       ref={ref => audio = ref}
       ></audio>
</div>
)

}
                   

export default DrumPads;
