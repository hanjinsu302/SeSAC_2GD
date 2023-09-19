import { Link } from "react-router-dom";

export default function Board(){
    return(
        <>
        <h4 style={{backgroundColor:"orange"}}>board</h4>
        <h1>게시물 목록</h1>
        <Link to="/board/1">1번 게시물</Link>
        <Link to="2">2번 게시물</Link>
        </>
    )
}