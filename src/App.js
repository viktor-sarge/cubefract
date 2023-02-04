import './App.css';
import Startbutton from './components/startbutton.component.jsx';
import {useState, useEffect } from 'react';
import world from './js/world';
const theWorld = new world;

function App() {
  const [running, setRunning ] = useState(false);
  const toggleRunning = () => {
    setRunning(runStatus => !runStatus);
    theWorld.toggleState(running);
  };

  return (
    <div className="App">
      <div>
        <canvas id="myCanvas" width="1000" height="400"></canvas>
      </div>
      <Startbutton onChangehandler={toggleRunning} running={running} />
      <span></span>
    </div>
  );
}

export default App;
