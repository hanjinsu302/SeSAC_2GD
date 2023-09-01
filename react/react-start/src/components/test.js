import { useState } from "react";

function Test (){
    const [img, setImg] = useState("");
    const [bgcolor, setBgcolor] =useState("white");
    const [color, setColor] = useState('black');
    return(
        <>
        <p>과일</p>
        <select>
            <option value={"apple"}>사과</option>
            <option value={"banana"}>바나나</option>
            <option value={"peach"}>복숭아</option>
        </select>
        <p>배경</p>
        <select>
            <option value={"blue"}>블루</option>
            <option value={"red"}>레드</option>
            <option value={"orange"} >오렌지</option>
        </select>
        <p>글자색</p>
        <select>
        <option value={"blue"}>블루</option>
            <option value={"red"}>레드</option>
            <option value={"orange"} >오렌지</option>
        </select>
        <p>내용</p>

        <div>여기에 표시됨</div>
        
        </>
    )
}

export default Test;