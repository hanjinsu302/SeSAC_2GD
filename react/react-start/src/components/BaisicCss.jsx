// import React, { useState } from "react"
// import "../styles/basic.css"
// import style from '../styles/style.module.css'
// import Names from "classnames/bind";
// import classNames from 'classnames';



// export default function BasicCss(){
//     const childDiv = {
//         backgroundColor:'pink',
//         width:'300px',
//         height:'150px',
//         fontSize:"29px",
//         textAlign:"center",
//         lineHeight:'50px'
//     }
//     // module.css
//     const setting = Names.bind(style);
//     const [isTrue, setTrue] = useState(true);
//     const stateVal='first';
//     const stateVal2 = true;
//     // styled-components
//     const H4Title=styled.h4
//     `background-color: yellow`;
//     const ParentDiv=styled.div
//     `background-color: #444`;
//     const ChildrenSpan=styled.span
//     `background-color: #ef0202`;
   
//     return(
//         <>
//         <h3> 스타일 적용 방법</h3>
//         <ol>
//             <li>인라인 스타일 적용 방법</li>
//             <li>css 파일 import</li>
//             <li>module.css import</li>
//             <li>Styled Component</li>
//         </ol>

//         <h4 style={{color: "#111"}}>인라인 스타일 적용</h4>
//         <div style={{backgroundColor: '#ddd'}}>
//             <div style={childDiv}>안녕하세요!</div>
//         </div>

//         <h4>css 파일 import</h4>
//         <div className="box1 second">
//             <div>안녕하세요!</div>
//         </div>

//         <h4>.module.css 파일 import</h4>
//         <div className={style.box2}>
//             <div>안녕하세요 !</div>
//         </div>
//         <hr/>
//         <div className={`${style.first} ${style.second}`}>
//             클래스 여러개 지정1- 템플릿 리터럴</div>
//         <div className={[style.first, style.second].join(" ")}>
//             클래스 여러개 지정2</div>
//         <div className={classNames(style.first, style.second)}>클래스 여러개 지정3 - classnames 모듈 사용</div>

//         <div className={setting("first", "second")}>
//         classnames 모듈 사용해보기 - bind 이용
//       </div>
//       <div className={setting("first", { second: true })}>
//         classnames 모듈 사용
//       </div>
//       <div className={setting("first", { second: isTrue })}>
//         classnames 모듈 사용
//       </div>
//       <button onClick={() => {
//         setTrue(!isTrue);
//       }}>이것은 버튼</button>
//       <div className={setting({ stateVal2 }, {second: isTrue}, stateVal)}>
//         classnames 모듈 사용
//         </div>
//         </>

        
//     )

// }