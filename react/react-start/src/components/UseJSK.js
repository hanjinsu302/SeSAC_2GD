

 export default function UseJSX() {
    // const divStyle = {
    //     width: '100px',
    //     height: '100px',
    //     backgroundColor: 'pink',
    //     border: '1px solid back'
    // }
    // return (
    //     <div>
    //         <div style={{color:'pink', width:'100px', height:'100px', backgroundColor:'black'}}>first</div>
    //         <div style={divStyle}>second</div>
    //         <div>third</div>
    //     </div>
    // );
    // let isShow = true;
    // let str;
    // if (isShow === true){
    //     str = 'true입니다';
    // }
    // return(
    //     <div>
    //         <div style={{backgroundColor:"pink"}}>{isShow ? "true일 때 보임" : ""}</div>
    //         <div style={{backgroundColor:"blue"}}>{isShow && "true일 때 보임"} </div>
    //         <div style={{backgroundColor:"pink"}}>{!isShow ? "false일 때 보임" : ""}</div>
    //         <div style={{backgroundColor:"blue"}}>{!isShow && "false일 때 보임"} </div>
    //         {/* if문과 for문은 jsk 문법 내에서 사용 금지! */}
    //         <div>{str}</div>
    //     </div>
    // );
    /* 3. onClick 사용 */
    const myName= "jinsu";


    // 매개 변수 없는 버전
    function myFunc() {
        alert(`안녕, 내이름은 ${myName} 이야`);
    }

    // 매개변수 있는 버전
    function addNum(a, b) {
        alert(a + b);
    }

    return (
        <div>
            <span onClick={myFunc}>hi</span>
            <span onClick={() => addNum(5,8)}>8 더하기 5</span>
            <span onClick={() => myFunc()}>hi 2</span>

            <span>{myFunc()}</span>
            <span>{myFunc}</span>
        </div>
    )

}