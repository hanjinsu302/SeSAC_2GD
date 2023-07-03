let date = "2023.07.03"

console.log(date.replaceAll(".","-"))
console.log("a".repeat(5))

const dateArr = date.split("");
console.log(dateArr)

// map, filter, find
/*
1.map >> 배열 내의 모근 원소에 대한 함수 호출한 결과를 모아서 새로운 배열 반환
2.filter >> 조건을 만족ㅎ는 요소들을 '배열'로 반환
3.find >> 조건을 만족하는 요소 중 첫번째 "값" 반환
매개변수로 익명 함수(함수 표현식, 화살표 함수)
배열 자체를 변경 시켜주지 않기 때문에 새로운 변수에 저장해서 사용
*/

// map
// [].map(function(value, index, arr){})
let arr4 = [1, 2, 3, 4, 5];
arr4.map(function(num){
    return num * 2;
});

console.log(arr4);

const multiArr = arr4.map(function(e1){
    return e1 * 2;
})
console.log(multiArr)