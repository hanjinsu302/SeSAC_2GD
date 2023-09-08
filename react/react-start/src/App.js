import logo from './logo.svg';
import styled, { keyframes } from "styled-components";
import "./styles/style.scss"; 
import UseScss from './components/UseScss';
import UseMemo from './components/05_UseMemoObj';
import UseReucer from './components/07_UseReducer';
import ContextTheme from './components/08_ContextTheme';
// import keyframes from 'styled-components';


function App() {

const keyframe = keyframes
` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`

  const RootDiv = styled.div
`text-align: center;`;
const AppHeader = styled.div
`background-color: #282c34;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;`;

const AppLogo = styled.img
`height: 40vmin;
pointer-events: none; 
@media (prefers-reduced-motion: no-preference) 
  { animation: ${keyframe} infinite 20s linear; }
`
;
const MyA = styled.a
`color: #61dafb;` ;
  return (
    <>
    {/* <UseScss /> */}
    {/* <UseMemo /> */}
    {/* <UseReucer/> */}
    <ContextTheme />

    </>
  )
}
export default App;