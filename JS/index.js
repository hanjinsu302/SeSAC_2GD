



// 알림 삼인방
// alert('world')
// confirm("hi")
// prompt('bye')

let myname = 'jinsu';
let mycity = "seoul"
let myage = '12'

console.log( "내 이름은" + myname +"이고 사는 곳은" + mycity +"입니다")
console.log(`내이름은 ${myname} 이고요 사는 곳은 ${mycity} 입니다`)

let myinfo = "내 이름은" + myname +"이고 사는 곳은" + mycity +"입니다";
let myinfo2 = `내이름은 ${myname} 이고요 사는 곳은 ${mycity} 입니다`;

console.log(myinfo)
console.log(myinfo2)

// Object
// 배열은 순서가 있는 반면에
// 오브젝트는 키-값 형태로 저장, 키의 이름으로 접근



let my={
    name: 'jinsu',
    age: '99999',
    city: 'seoul',
    hi: function() {
        return 'hello';
    },
};

console.log(my)
// 점 표기법
console.log(my.name)
console.log(my.age)
console.log(my.city)
console.log(my.hi())

let fruits = [ 'Apple', 'Banana', 'Cherry']
let fruits2 = new Array('Apple', 'Banana', 'Cherry')
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//실습1
console.log(typeof 1 + " isn't " + typeof 'a' + " datatype ")
console.log("typeof를 boolean 이나 null 에 사용하면," + typeof null + "결과를 얻을 수 있다")



const letters = [
    ["사", "스", "자", "크"],
    ["진", "안", "리", "이"],
    ["가", "수", "림", "나"],
    ["아", "으", "차", "운"],
];

console.log(letters[3][0])
console.log(letters[1][3])
console.log(letters[0][1])
console.log(letters[0][3])
console.log(letters[2][2])


// 형변환
// 1. >> 문자
let str1 = true;
let str2 = 123;
let str3 = null;


console.log(typeof String(str1))
console.log(typeof String(str2))
console.log(typeof String(str3))

console.log(typeof str1.toString())

//2. 숫자로 변경
 let n1 = true;// boolean
 let n2 = 123; // number
 let n3 = "3.14"; //string
 let n4 = false; //string

 console.log(Number(n1))
 console.log(Number(n4))
 console.log(typeof Number(n2))
 console.log( Number(n3))
 console.log(parseInt(n3))


 let mathScore =prompt('수학점수를 입력하세요')
 let engScore =prompt('영어점수를 입력하세요')
 mathScore = Number(mathScore);
 engScore = Number(engScore);

 let avgScore=(mathScore + engScore) / 2;

  console.log(avgScore) 