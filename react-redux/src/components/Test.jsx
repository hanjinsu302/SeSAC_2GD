import { useDispatch, useSelector } from "react-redux";

export default function Test() {
const number = useSelector((state) => { return state;
});
const dispatch = useDispatch();
// const number1 = useSelector((state) => state); 
return (
<>
<h2>redux 값 가져오기 (useSelector 사용)</h2> <p>store에 저장되어 있는 number는 {number}</p>
<button onClick={() => dispatch({ type: "증가" })}>+</button>
<button onClick={() => dispatch({ type: "감소" })}>-</button>


</>
); 
}