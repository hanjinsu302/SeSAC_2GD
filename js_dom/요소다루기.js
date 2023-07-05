
const div1 = document.getElementById('div1');
/*
1. 태그 내부 내용
 - innerText = 요소안의 텍스트를 가져오거나 수정
 -innerHtml = 요쇼안의 '코드'를 가져오거니 수정
 -textContent = innerText 처럼 텍스트 정보 표시
*/
console.log(div1.textContent) //여기는 first div 태그입니다.
console.log(div1.innerText) //여기는 first div 태그입니다.
console.log(div1.innerHTML) //여기는 <b>first</b> div 태그입니다.

div1.innerText='여기는 <b> 첫번째 </b> div 태그 입니다! &hearts;';
div1.innerHTML='여기는 <b> 첫번째 </b> div 태그 입니다! &hearts;';
div1.textContent='여기는 <b> 첫번째 </b> div 태그 입니다! &hearts;';
console.log(div1.innerText);
div1.textContent="          여기는 <b> 첫번째 </b> div 태그 입니다! &hearts"
console.log(div1.textContent)

/*
2. 속성
- setAttribute() : 속성값 설정
- getAttribute() : 속성값 가져오기
*/

//메소드로 속성에 접근 후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh")

naver.setAttribute('href','http://www.google.com')
naver.innerText ='google';

console.log(pooh.getAttribute('src'))
//점으로 속성에 접근 후 변경
console.log(pooh.src)
console.log(pooh.alt)


/*
3. css 지정
*/

const h1 = document.querySelector('h1');
const list = document.querySelectorAll('li')
// console.log(h1);
// console.log(list);

//3-1. style 속성 사용
// for(let li of list){
//     console.log(li)
//     li.style.backgroundColor = 'pink'
//     li.style.color ='#fff'
//     li.style.fontSize = '1.3rem'

// }

//3-2 . class list 사용
console.log(h1.classList)

h1.classList.add('add-h1');
h1.classList.remove('add-h1');
// h1.classList.contains('add-h1');

console.log(h1.classList.contains('add-h1'));
h1.classList.toggle('add-h1');

// if(h1.classList.contains('add-h1')){
//     h1.classList.remove('add-h1')
// }else {
//     h1.classList.toggle("add-h1")
// }

//li 태그(4개)에 friends 클래스 추가 해보기
for(let el of list){
    el.classList.add("friends");
}



/* 4. 요소 생성, 추가, 삭제 ,접근 */
// 요소에게 접근하기
const friends = document.getElementById('friends')
const tigger = document.getElementById("tigger")
// console.log(friends)
// console.log(tigger)


//자식 노드에 접근
console.log('---------자식 노드 접근----------')
console.log(friends.children) //  배열 형태로 저장이됨
console.log(friends.children[0])


//부모 노드에 접근
console.log('---------부모 노드 접근----------')
console.log(tigger.parentNode);

//형제 노드에 접근
console.log('---------형제 노드 접근----------')
console.log(tigger.previousElementSibling)
console.log(tigger.nextElementSibling)

// 요소 생성
const container= document.querySelector('.container')
console.log(container)

const p = document.createElement('p')
p.innerText = '추가한 p';
p.style.fontWeight = 'bold';
p.style.backgroundColor = 'red';

console.log(p)

//4-2. 요소 추가
container.append(p)

const p2 = document.createElement('p');
p2.innerText ='p2'
const p3 = document.createElement('p');
p3.innerText ='p3'

p2.classList.add('p-2')
p3.classList.add('p-3')

container.prepend(p2)
container.append(p3)


const h2 = document.createElement('h2')
h2.innerText = '추가된 h2'
const h3 = document.createElement('h3')
h3.innerText = '추가된 h3'

h1.after(h3)
h1.before(h2)

const div = document.querySelectorAll('div')
// div.classList.add(img)
console.log(div[2])
 container.appendChild(div[2])



 //요소 삭제
 // remove, removechild
 const firstLi = document.querySelector('li');
 