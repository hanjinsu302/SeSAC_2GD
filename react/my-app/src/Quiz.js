import {useRef, useState} from "react";

function Quiz() {
const opList = ["+","-","*"];
const inputRef = useRef(null);
const num1 = Math.round(Math.random() * 10);
const opIndex = Math.round(Math.random()*2);
const op = opList[opIndex]
const num2= Math.round(Math.random() * 10);

const calculateResult = () => {
    //eval() -> 권장하지 않는 친구
    //eal( 문자열 ) -> 그 문자열을 계산해 준다.
    // return eval(num1 + op + num2);
if (op =="+") return num1 + num2;
else if (op == "-") return num1 - num2;
else if (op == "*") return num1 * num2;

return 0;
}

const result= calculateResult();
const calculate = () => {
    
console.log(inputRef.current.value);
if ( inputRef.current.value == result) alert("정답")
else alert('오답')
};


return(
<>
  <span>{num1} {op} {num2}</span>
  <br />
  <input type="text" ref={inputRef} />
  <button onClick={calculate}> 정답 제출 </button>
</>
)

}

export default Quiz;