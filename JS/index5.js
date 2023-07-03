
let age = 7;

if (age>= 20){
    console.log(  '성인입니다')
}else if(age>=17){
    console.log( '고등학생입니다')
}else if(age>=14){
    console.log(  '중학생입니다')
}else if(age>=8){
    console.log(  '초등학생입니다')
}else if(age>=0){
    console.log(  '유아입니다')
}

let userId = "user"
let userPw = '1234'

function login (){
    let inputId = prompt('아이디를 입력해주세요')
    let inputPw = prompt('비밀번호를 입력해주세요')

    if (userId === inputId) {
        if(userPw === inputPw) {
            alert('로그인 성공!!');
        }else {
            alert('비밀번호가 틀렸습니다!')
        }
    }else {
        alert('아이디가 틀렸어요!')
    }
}

//login();
/* switch ~ case*/ 
// let a = 4;
// switch(값){
//     case 1:
//         //값이 1이라면 실행할 문장
//         break;
//     case 'abcd':
//         //값이 abcd 라면 실행할 문장
//         break;
//     default:
//         //위의 case가 모두 일치하지 않을 때 실행 할 문장
//         break;    
// }

let a = 8;
switch(a){
    case 3:
        console.log('입력값이 4보다 작습니다');
        break;
    case 4:
        console.log('입력값이 4 입니다');
        break;
    case 5:
        console.log('입력값이 5입니다'); 
        break;  
    default:
        console.log('3,4,5가 아니네요'); 
        break;

}

// let num= 10;

   
// if (num % 2 === 0){
//     alert('짝수입니다')

// }else{
//     alert('홀수입니다')

// }

//삼항 연산자

let now = new Date().getHours();
console.log(now)

if(now >=12){
    console.log("오후")
}else{
    console.log('오전')
}

now >= 12 ? console.log('삼항 오후'):console.log('삼항 오전')



