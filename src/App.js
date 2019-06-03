import React from 'react' 
import styled from 'styled-components' 
import Display from './component/Display'


const App =() => (
   <React.Fragment>
    <DrumMachine id="drum-machine">    
    <Display/>
    </DrumMachine>
   </React.Fragment>
  );

const DrumMachine = styled.div`
  height: 100vh;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  background-color:	#D2B48C;
  font-size: 36px;
  font-family: cursive;
`
export default App;