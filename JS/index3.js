// 변수
// - var
//   - 중복 선언(재선언)이 가능,
//   - 예기치 못한 값을 반환할 수 있다.
// - let
//   - 중복선언은 불가하지만 재할당을 가능
// - const
//   - 재선언과 재할당도 불가능
//   -선언과 동시에 초기화 작업을 해야 한다.


var name = '홍길동';
    console.log(name);
var name = '나비';
    console.log(name);

let a;
console.log(a)
a = 10;
console.log(a)


const b = 100;
// b = 12; 재선언 불가
console.log(b)


let q =10;
q - 5;
q = q - 5
console.log(q)


// 연산자
// 산술 연산자: + - * /
// 대입 연산자: =
// 비교 연산자: == === != !== < > <= >=
// 논리연산자: !(not), &&(and), ||(or)


console.log(1 == 1);
console.log(1 == "1");
console.log(1 != 1);
console.log(1 === "1");

// 크기비교
//> < <= >=
console.log( 1 < 2);
console.log( 1 > 2);
console.log( 1 >= 2);
console.log( 1 <= 2);

//산술 연산
console.log( 1 + 1);
console.log( 5 - 3);
console.log( 5 * 3);
console.log( 1 <= 2);

//논리 연산자
console.log(!true) //false
console.log(!!true) // true
console.log(true || true) // true
console.log(true || false || true) //true
console.log( true && true) //true
console.log( false && true) //false
console.log((2>1 && -2<1)||5>2) 


console.log( "" == "0")
console.log(false == "hi")

console.log('0' == false);
console.log('0' == 0);
console.log('' == 0);
console.log(undefined == null);


