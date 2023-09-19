import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Board from "./page/Board";
import BoardDetail from "./page/BoardDetail";

import Error from "./page/Error";
import Index from "./page/Index";
import Profile from "./page/Profile";

function App() {
  return (
    <>
    
    {/* <nav>
      <ul>
        <li><a href="/profile">프로필</a></li>
        <li><a href="/board">게시판</a></li>
      </ul>
    </nav> */}
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/board" element={<Board />}></Route>
      <Route path="*" element={<Error/>}></Route>
      <Route path="/board/:boardID" element={<BoardDetail />} />
      </Routes>

    
    </>
  );
}

export default App;
