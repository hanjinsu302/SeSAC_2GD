  export default function FirstPractice() {
    const helloStr =
        "Hello,first exercise"
    
    function click(){
        alert('click');
    }
    return(
        <div style={{marginTop: '32px', backgroundColor:"skyblue"}} onClick={click}>
        {helloStr}

        </div>

    );
  }