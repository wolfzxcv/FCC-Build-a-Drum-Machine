import React,{useState} from 'react';
import styled from 'styled-components' 
import DrumPads from '../DrumPads'

const Display = () => {
  const [display, setDisplay] = useState('Click or Press a Key')
  
  const handleDisplay = display => setDisplay( display )
  
    return(
        <React.Fragment> 
        <Title id='display'>{display}</Title>
        <Drums id='drum-pads'>{data.map(d => (
          <DrumPads
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={handleDisplay}
          />   
         ))}</Drums>
         </React.Fragment> 
    )
  }

const Title = styled.div`
 height: 30vh;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size:72px;
`  
const Drums = styled.div`
 height: 70vh;
 display: flex;
 justify-content: center;
 align-content: center;
`
const data =[
  { id: 'Crash', letter: 'Q', src: 'http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Crash%20Cymbal.wav' },
  { id: 'China', letter: 'W', src: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/CRASH.WAV' },
  { id: 'Ride', letter: 'E', src: 'http://www.denhaku.com/r_box/sr16/sr16cym/flngride.wav' },
  { id: 'Hi-Hat', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { id: 'Tom-Tom1', letter: 'S', src: 'http://tipiwiki.free.fr/snd/Tamtam2.wav' },
  { id: 'Tom-Tom2', letter: 'D', src: 'http://www.denhaku.com/r_box/ddd1/tom3.wav' },
  { id: 'Snare', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { id: 'Floor-Tom', letter: 'C', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/flrrmtom.wav' }
  ] 


export default Display;