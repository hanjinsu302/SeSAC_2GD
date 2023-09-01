import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

function App() {
   const[fruits, setFruits] = useState('apple')
   const[background, setBackground] = useState('black')
   const[color, setColor] = useState('white')
   const[content, setContent] = useState('white')

  
  

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select  setFruits={setFruits} setBackground={setBackground} setColor={setColor}/>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input setContent={setContent}/>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result  data={{fruits, color, background, content}}/>
      </div>
    </>
  );
}

export default App;
