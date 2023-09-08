import logo from './logo.svg';
import styled, { keyframes } from "styled-components";
import "./styles/style.scss"; 
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
<RootDiv> 
  <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p> Styled 적용을 위해 변경 된 App.js
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <MyA href="https://reactjs.org" target="_blank" rel="noopener noreferrer">run to react</MyA>
      </AppHeader>
</RootDiv> );
}
export default App;