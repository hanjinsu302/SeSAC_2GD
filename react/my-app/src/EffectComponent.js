import {useEffect, useState} from "react";

function EffectComponent (){
const [count, setCount] = useState(0);
useEffect(() =>{
console.log("run useEffect")
},[]); //생성될 때 ( mount 될 때)
useEffect(() =>{
console.log("change count")
},[count]);// 배열에 보낸 값이 변경 될 때마라 = 갱신 될 때마라 = update 될 때

useEffect(() => {
return () =>{
console.log("Remove component")
}
})
return(

<>
  EffectComponent
  <br />
  {count}
  <button onClick={()=>{
    setCount(count + 1)
    }}>
    +1
  </button>
</>
)
}

export default EffectComponent;