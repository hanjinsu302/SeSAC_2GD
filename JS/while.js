let n1 = 1;// 초기화 작업 while 내부에서 사용할 변수의 초기화
// 기본 형태 while(조건){조건이 참일 때 실행 할 문장}


while(n1<=5){
    console.log(n1)
    n1++;
}
//10부터 6까지 출력
let n2 = 10;
 while( n2 >= 6){
    console.log(n2)
    n2-- ;
 }

//  while과 if를 사용해서 1~10까지의 짝수 출력
let n3 = 1;
while( n3 < 11){
    if(n3%2===0){
        console.log(n3);
    }
    n3++;
}


//while과 무한루프
let n4 = 1;
while(true){
    console.log(n4);
    n4++;
    if(n4 === 11){
        break;
    }
}

let n5 = 0;
//confirm
//확인 -> true 반환
//취소 -> false 반환
while(confirm('계속 진행?')){

    n5++;
    alert(n5+ '번째 alert')

}

//continue
// 1 부터 10 홀수의 합 구하기
// break
// 반복문에서 반복을 멈추고 즉시 탈출

let sum2=0;
for(let i = 1; i<11; i++){
    if(i % 2 === 0){
        continue;
    }
    sum2= sum2 + i;
}
console.log(sum2);


let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log( sum);