
function HelloworldButton(){
    const [isClick, setIsClick] = React.useState(true);
    const text = isClick ? "클릭이 되었군요" : "hello, World";
   return(
    <button onClick={()=>setIsClick(!isClick)} >
        <div>
            <span>{text}</span>
        </div>
    </button>
   );
}



const DOMContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(DOMContainer);
root.render((<HelloworldButton />));