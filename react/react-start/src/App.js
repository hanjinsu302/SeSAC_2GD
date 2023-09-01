import React, {useState} from 'react';
import Handler from './components/handler_ex';
import Test from './components/test';


function App() {
  function test() {
    alert("hihi")
    console.log('test');
  }
  //React:fragment

  // const [ name, setName] = useState('abc');
  //const [state 이름, state 변경 함수 ]

  // const test1 = {
  //   a1:'1',
  // };
  // console.log(test1[a1]);
  // const {a1, b1} = test1;

  // const test2 = ['1', '2'];
  // const [a2, b2] = test2;

  const handleClick = (e) =>{
    console.log(e);
    e.preventDefault();
  }
  return(
    <>
    <a href='https://naver.com' onClick={handleClick}>a 태그입니다. </a>
    <button onClick={test}>버튼</button>
    <Handler></Handler>
    <Test></Test>
    </>
    // <div>
    //   <h1 style={{textAlign:"center"}}>todo List</h1>
    //   {/* <FunctionProps name = '사과' krPrice = {5000} number={10}/>
    //   <FunctionProps name = '수박' krPrice = {8000} number={30}/> */}
    //   <Props title = "리엑트 공부"  todo = "state, props 공부하기"/>
    //   <Props title = "저녁먹기"  todo = "스타 필드 맛집정복"/>
    //   <Props title = "러닝메이트"  todo = "디자인 체크하기"/>
    //   <ClassProps name="뽀로로" nickname="사고뭉치" color="#0186cb"/>
    //   <ClassProps2 name="루피" nickname="공주" bgColor="#ed9095"/>
    // </div>
  )
}

export default App;
