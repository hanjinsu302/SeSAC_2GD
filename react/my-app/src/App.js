import './App.css';
import { useState } from "react"
import ConditionalOne from './ConditionalOne';
import ConditionalTwo from './ConditionalTwo';
import RefVarState from './count';
import DOMComponent from './DOMComponent';
import DOMComponent2 from './DOMComponent copy';
import EffectComponent from './EffectComponent';
import Quiz from './Quiz';
import TestUseEffect from './TestuseXffect';
import Timer from './Timer';
import PracticeTimer from './PracticeTimer';

function App() {
  
   const [ show, setShow] = useState(true);

  return (
    <>
     {show && <PracticeTimer />}
     <button onClick={() => {
        setShow(!show)
      }}>stop</button>
    </>
    // <div className="App">
    //   <>
    //   {show && <Timer/>}

    

    //   {/* <DOMComponent />
    //   <DOMComponent />
    //   <DOMComponent /> */}
    //   {/* <DOMComponent2 />
    //   <DOMComponent2 />
    //   <DOMComponent2 /> */}
    //   {/* <Quiz/> */}
    //   {/* <RefVarState/> */}
     
    //   {/* <button>클릭</button> */}
    //   {/* <EffectComponent /> */}
    //   {/* <TestUseEffect/> */}
    //   </>
    // </div>
  );
}

export default App;
