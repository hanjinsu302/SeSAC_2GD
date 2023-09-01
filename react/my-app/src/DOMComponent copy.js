import {useRef, useState} from "react";

function DOMComponent2() {
    const [color, setColor] = useState("");
    //const 변수명 = useRef(null);
    // <~~~~ ref={변수명} />
    const inputRef = useRef(null);

    
    const getInput = () =>{
        if (!inputRef.current) return;
        setColor(inputRef.current.value);
        //inputRef.current = <input type="text" id="input" ref={inputRef} />
        inputRef.current.focus();
        inputRef.current.value = "";
        console.log(inputRef.current.value);
       
    };

    return(
        <div style={{backgroundColor:color, width:"500px", height:"500px"}}>
            <input type="text"  ref={inputRef} />
            <button onClick={getInput}>색 적용</button>
        </div>
    )

}

export default DOMComponent2;