import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export default  function ContextHeader () {
    const data =useContext(ThemeContext);
    console.log(data)
    const {isDark} = useContext(ThemeContext);
    
    return(
        <header className="header" style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black",
        }}>
        <h1>header</h1>
        </header>
    )
}