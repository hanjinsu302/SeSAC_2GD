import { ClassProps, ClassProps2 } from "./components/classProps";
import FunctionProps from "./components/FunctionProps"
import Props from "./components/Props";


function App() {
  return(
    <div>
      <h1 style={{textAlign:"center"}}>todo List</h1>
      {/* <FunctionProps name = '사과' krPrice = {5000} number={10}/>
      <FunctionProps name = '수박' krPrice = {8000} number={30}/> */}
      <Props title = "리엑트 공부"  todo = "state, props 공부하기"/>
      <Props title = "저녁먹기"  todo = "스타 필드 맛집정복"/>
      <Props title = "러닝메이트"  todo = "디자인 체크하기"/>
      <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb"/>
      <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095"/>
    </div>
  )
}

export default App;
