"use strict";
function printSome(x) {
    return x;
}
printSome("a");
printSome(true);
printSome([1, 2, 3, 4, 5]);
function printSome2(x, y) {
    console.log(x);
    console.log(y);
}
printSome2(1, 2);
printSome2("안녕", "hello");
function printSome3(x, y) {
    console.log(x);
    console.log(y);
}
printSome3("hello", false);
const arrLength = (arr) => {
    return arrLength.length;
};
const arr_1 = [1, 2, 3, 5, 6];
const arr_2 = ["apple", "mango"];
const arr_3 = [[12, 13], [20, 21], [10]]; //number[number[]]
console.log(arrLength(arr_1));
console.log(arrLength(arr_2));
console.log(arrLength(arr_3));
