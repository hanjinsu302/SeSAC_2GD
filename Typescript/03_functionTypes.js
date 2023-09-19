"use strict";
function print(a, b) {
    console.log(a);
    console.log(b);
}
print(1, 2);
// print(1, 2, 3) Error!!
// print(1) Error!!
function print2(a, b, c) {
    console.log("------print2-----");
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(1, 2, 3);
print2(1, 2);
print2(1);
function print3(a, b, c = 5) {
    console.log("------print3-----");
    console.log(a);
    console.log(b);
    console.log(c);
}
print3(1, 2);
print3(1, 2, 3);
function sayHello() {
    console.log('안녕');
}
// void 외에 다른 리턴 타입
//string
function concatStr(a, b) {
    return a + b;
}
console.log(concatStr("hi", "jinsu"));
// void 외에 다른 리턴 타입
//number
function circleArea(r) {
    return r * r * Math.PI;
}
console.log(circleArea(3));
const squareArea = (a, b) => {
    return a * b;
};
console.log(squareArea(3, 4));
const triangleArea = (w, h) => Number(w) * Number(h) / 2;
console.log(triangleArea("2", "5"));
const jh = {
    name: 'jinsu',
    hi() {
        return 'hi my name is ' + this.name;
    },
    bye(a) {
        return `작별인사를 ${a}번 했습니다`;
    },
};
console.log(jh.hi());
console.log(jh.bye(5));
// void 외에 다른 리턴 타입
//never type
function goinon(a) {
    while (true) {
        console.log("go");
        //if(a > 10) break;
    }
}
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 11));
// function sum2(...rest:number[]):number {
//     return rest.reduce((acc, current) => acc + current, 0);
//   }
//   const numbers = [1,2,3,4,10];
//   const result = sum2(...numbers);
//   console.log(result); 
/*
1.매개변수로 숫자를 받음, 전개연산자 이용 -> 매개변수의 개수가 상관없다
2.매개변수로 받은 인자의 모든 합을 'return'
*/
function sum2(...num) {
    let sum = 0;
    //num // 사실은 배열
    num.forEach((el) => (sum += el));
    return sum;
}
console.log(sum2(1, 2, 3, 4, 5, 10));
function add(x, y) {
    return x + y;
}
console.log(add("hello", "wolrd"));
console.log(add(10, 10));
console.log(add("2", "1"));
