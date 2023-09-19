"use strict";
let num = 1;
num = 2;
//2.string type
let str1 = "안녕하세요";
console.log(str1, num);
//3 boolean, null, undefined
let isTrue = true;
let undef;
const empty = null;
// 4. object
const obj1 = {
    name: "jinsu",
};
// 5. array
let numArr = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c"];
let arr3 = ["a", 'b'];
let arr4 = [1, 2, 3, "a", "b", "c"];
let arr5 = [1, 2, 3, "a", "b"];
// boolean, null, number arr가 요소로 들어가는 배열 arr6
let arr6 = [true, null, [1, 2, 3]];
let arr7 = [true, null, [1, 2, 3]];
console.log(arr6[0]);
arr6[1] = [5, 6, 7];
//arr6[2] = "str";// 선언할 때 부여한 type이 아니라면(string) 오류를 보여줌
let arrAny = [1, 2, "type", null, true, undefined];
console.log(arrAny);
//Tuple
//js에서의 배열과 같음
//순서와 갯수가 정해져 있는 배열(요소의 길이와 타입 고정)
//일반 배열과 다은점은 배열의 각각의 타입에 
