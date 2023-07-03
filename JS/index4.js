/*
함수 선언문
function 함수 이름(매개변수) {
    함수내용
}
함수 이름은 camelCase를 이용!
*/

helloworld1();
console.log("----------------")
function helloworld1(){
    console.log("helloworld1")
}

helloworld1();

function helloworld2(){
    return "helloworld2"
}
/*
return
- 함수의 반환값, 함수 내부 코드의 '최종값'
*/
console.log (helloworld2());

function add(num1, num2){
    console.log(num1 + num2);
}
function add2(num1, num2){
    console.log("여기는 실행됨")
    return num1 + num2;
    console.log('여기는 실행 되지 않음')
}
add(4, 5);
add2(3,4)
console.log(add2(2, 3))

//함수 표현식
//함수 표현식은 선언 이후에 호출 
const helloWorld3 = function () {
    console.log('hellowrold3')
};
helloWorld3();

const helloWorld4 = () =>{
    return "helloWolrd4!!";
}
console.log(helloWorld4())
helloWorld4();

/*
매개변수가 있는 함수
 */
function sayHello1(name){
    return "안녕하세요 " + name + " 님";
}
console.log(sayHello1("jinsu"))

function sayHello2(text, name){
    console.log(`${text}!! ${name}님`)
}
let 안녕 = '안녕하세요'
 sayHello2("안녕", "jinsu")





const sayHello3 = (text, name) => {
    console.log(`${text}!! ${name}님`)
 }
 sayHello3("굿", "바이")


 //실습 1
 function multifly (num3, num4 ) {
    return num3 * num4

 }
 console.log(multifly(3,4))

//실습2
function aqure (num5) {
    console.log(num5 * num5)

}
aqure(4);

 