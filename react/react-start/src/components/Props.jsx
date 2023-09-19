function Props(props) {

    const {title, todo} = props;
    
return(
    <div >
        <h2 style={{backgroundColor:"gray", color:"white", padding:"3px", textAlign:"center"}}>{title}</h2>
        <div style={{display:"flex", justifyContent:"space-around"}}> 
        <p>{todo}</p>
        <input type={"checkbox"}></input>
        </div>
        <hr/>
    </div>
)
}

export default Props;