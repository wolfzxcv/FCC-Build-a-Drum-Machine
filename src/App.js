import React from 'react' 
import styled from 'styled-components' 
import Display from '../src/component/Display'

const App =() =>(
  <DrumMachine id='drum-machine'>
  <Display/>  
  </DrumMachine>  
)
 
const DrumMachine = styled.div`
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  background-color:	#D2B48C;
  font-family: cursive;
`
export default App;