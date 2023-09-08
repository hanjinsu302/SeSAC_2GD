import "../styles/style.scss";
import img1 from "../sass/img1.png"; 
import img2 from "../sass/img2.png"; 
import img3 from "../sass/img3.png"; 
import img4 from "../sass/img4.png"; 

export default function UseScss(){
    return(
        <>
        <h1>hi</h1>
        <div className="div1">
            <div className="div2">
                <div className="div3">
                </div>
            </div>
                    <button className="btn orangered">Button1</button>
                    <button className="btn btn--opacity">Button2</button>
                    <button className="btn btn--blue">Button3</button>
        </div>
        <div className="container">
            <div className="box1"></div>
            <div className="box1"></div>
            <div className="box1"></div>
            <p className="circle"></p>
            <p className="circle"></p>
            <p className="circle"></p>
            <div className="box2">HI1</div>
            <div className="box2">HI2</div>
            <div className="box2">HI3</div>
            <div className="box2">HI4</div>
        </div>

        <h2>참고 &gt; 이미지 적용하기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <img src="../scss/img1.png" alt="경로명으로 접근" width={"100px"} />
      <img src={img1} alt="import 로 접근" width={"100px"} />
      <div className="src-img img-test"></div>

      <h4>2. public 폴더 내부의 이미지 가져오기</h4>
      <img src="/img1.png" alt="public 폴더 사진 접근" width={"100px"} />
      <img
        src={process.env.PUBLIC_URL + "/img1.png"}
        alt="public 폴더 사진 접근"
        width={"100px"}
      />
      <div className="public-img img-test"></div>

        <h1>실습문제</h1>
      <div className="practice">
        <div className="items item1">
        <img  className="img" src={img1} alt="import 로 접근"  />
        </div>
        <div className="items item2">
        <img className="img" src={img2} alt="import 로 접근"  />
        </div>
        <div className="items item3">
        <img className="img" src={img3} alt="import 로 접근"  />
        </div>
        <div className="items item4">
        <img  className="img" src={img4} alt="import 로 접근"  />
        </div>
        </div>
        </>
    )
}