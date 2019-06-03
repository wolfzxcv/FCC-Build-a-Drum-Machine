import React,{useState} from 'react';
import styled from 'styled-components' 
import PropTypes from 'prop-types'
import DrumPads from '../DrumPads'

const Display = () => {

  const [display,setDisplay]= useState('Click to play')
  
 // handleDisplay = () => setDisplay(display); 
  //  handleDisplay={handleDisplay}
  return (
  <React.Fragment>  
  <div id="display">{display}</div> 
  <DrumPads />
  </React.Fragment>
)
}

const StyledDisplay = styled(Display)`
#display{
  height: 30vh;
}

#drum-pads{
  height: 70vh;
}
`



export default StyledDisplay;