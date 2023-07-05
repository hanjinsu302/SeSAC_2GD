console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);
console.log(document.URL);

// getElementById
console.log(document.getElementById("red"))
console.log(document.getElementById("green"))



//getElementByClassName
console.log(document.getElementsByClassName("pink"))
console.log(document.getElementsByClassName("pink")[1])


//getElementsByTagName
console.log(document.getElementsByTagName('div'))

//getElementsByName
console.log(document.getElementsByName('id'))


// querySelector
// Css에서 사용했던 선택자를 이용해서 요소 선택!
// 선택자와 일치하는 첫번째 요소를 반환
 console.log(document.querySelector('.pink'))
 console.log(document.querySelector('.others'))
 console.log(document.querySelector('#green'))
 console.log(document.querySelector('div'))//테그
 console.log(document.querySelector('[name="id"]'))//속성 선택자

 //querySelectAll()
 const divs = document.querySelectorAll("div");
 console.log(divs)

 const pinks = document.querySelectorAll(".pink")
 console.log(pinks[0])
 console.log(pinks[1])
 console.log(pinks[2])
 console.log(pinks[3])

 for(let i = 0; i<pinks.length; i++){
    console.log(pinks)
 }

 //for of문 사용해보기!
 //
for(let pink of pinks){
    console.log(pink)
}