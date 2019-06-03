import React from 'react';
import styled from 'styled-components' 

const data =[
       { id: 'crash', letter: 'Q', src: 'http://www.synthmania.com/Boss%20DR-220A/Audio/Boss%20DR-220A%20WAV%20samples/Crash%20Cymbal.wav' },
       { id: 'china', letter: 'W', src: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/CRASH.WAV' },
       { id: 'ride', letter: 'E', src: 'http://www.denhaku.com/r_box/sr16/sr16cym/flngride.wav' },
       { id: 'hh', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
       { id: 'tom1', letter: 'S', src: 'http://tipiwiki.free.fr/snd/Tamtam2.wav' },
       { id: 'tom2', letter: 'D', src: 'http://www.denhaku.com/r_box/ddd1/tom3.wav' },
       { id: 'snare', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
       { id: 'kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
       { id: 'ft', letter: 'C', src: 'http://www.denhaku.com/r_box/sr16/sr16tom/flrrmtom.wav' }
       ]   

const DrumPads = data.map( x => (  
       <div className="drum-pad" id={x.id} >
       <h1>{x.letter}</h1>
       <audio className="clip" id={x.letter} src={x.src}></audio>
       </div> 
       ) )         

export default DrumPads;
