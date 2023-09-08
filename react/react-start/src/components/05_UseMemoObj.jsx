import { useEffect, useMemo, useState } from "react"

export default  function UseMemo() {
    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(true);

    // const location = {
    //     country: isKorea?"한국" : "외국",
    // };

    const location = useMemo(()=> {
        return{
            country: isKorea?"한국" : "외국",
        };
    },[isKorea])

    /*
    const location = {country: isKorea?"한국" : "외국",};
    오브젝트 -> 문자열 로 변경하는 게 효율적인 측면에서 좋다

    오브젝트나 배열을 USeEffect의 의존성 배열에 넣지 않아도 되는 경우라면,
    useMemo를 사용하지 않는 편이 더 좋습니다.
     
     */

    useEffect(() => {
        console.log("location이 변경 될 떄 마다 실행")
    },[location]);

    return(
        <>
        <h1>UseMemo 사용해보기</h1>
        <input type="number" onChange={(e) => setNumber(e.target.value)}
        value={number}
        />
        <div>{number}</div>
        <hr/>
        <div>{location.country}</div>
        <button onClick={()=>{setIsKorea(!isKorea)}}>나라 바꾸기</button>
        </>
    )
}