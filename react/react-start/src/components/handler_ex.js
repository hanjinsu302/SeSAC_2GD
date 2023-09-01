import { useState } from "react";

function Handler (){
    const [text, setText] = useState("hello world!");
    const [color, setColor] = useState("black");
    const [opacity, setOpacity] = useState(1);
    const [text1, setText1] = useState(true);

    function btn() {
      setText1(!text1);
    }
    function blue(){
        setText('blue')
        setColor("blue")
    }
    function red(){
        setText('red')
        setColor("red")
    }
  
return(
    <>
    <p style={{color:color, opacity:opacity}}>{text}</p>
    <button onClick={() => setText("goodbye!")}>글자 바꾸기</button>
    <button onClick={blue}>파란색</button>
    <button onClick={red}>빨간색</button>
    <button onClick={btn}>{text1 ? "사라져라" : "보여라"}</button>
      <br />
      <div>{text1 ? "안녕하세요" : ""}</div>
    </>
)

}

export default Handler;




