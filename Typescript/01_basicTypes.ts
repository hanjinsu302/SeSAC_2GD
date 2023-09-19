let num:number =  1;
num = 2;


//2.string type
let str1: string ="안녕하세요";

console.log(str1, num);

//3 boolean, null, undefined
let isTrue: boolean = true;
let undef: undefined;
const empty: null = null;

// 4. object
const obj1: object = {
    name: "jinsu",
};

// 5. array
let numArr: number[] = [1, 2, 3, 4, 5];
let arr2: string[]= ["a", "b", "c"];
let arr3: Array<string> = ["a", 'b' ];

let arr4:Array<string | number> =[1, 2, 3, "a","b", "c"]
let arr5: (string | number)[] = [1,2,3, "a", "b"]

// boolean, null, number arr가 요소로 들어가는 배열 arr6
 let arr6: Array<boolean | null | number[]>=[true, null, [1,2,3]];
 let arr7: (boolean | null | number[])[] = [true, null, [1,2,3]];

 console.log(arr6[0]);
 arr6[1] = [5,6,7];
 //arr6[2] = "str";// 선언할 때 부여한 type이 아니라면(string) 오류를 보여줌

 let arrAny:any[]=[1,2,"type", null, true, undefined];
 console.log(arrAny);


 //Tuple
 //js에서의 배열과 같음
 //순서와 갯수가 정해져 있는 배열(요소의 길이와 타입 고정)
 //일반 배열과 다은점은 배열의 각각의 타입에 