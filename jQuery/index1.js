//$('선택자')
//document.querySelector('선택자')

console.log($("button"))
$('button').css('color','red')


// 글자 속성 변경
function submitjs(){
    document.querySelector('.div1').innerHTML="<b>방갑습니다</b>"
    document
    .querySelector('.div1')
    .setAttribute("style","boder: 2px solid red")
    
}
function submitjq(){
    $('div1').html("<i>잘 지냄</i>");
    $('div1').css("boder","3px dotted blue");
}


/* 요소 추가하기 */ 
function appendJs(){
    let ul = document.querySelector(".colors");
    let li = document.createElement("li")
    li.innerText = "마지막 자식으로 추가된 js"

    ul.append(li);
}
function appendJq(){
    $('.colors').append('<li>마지막 자식으로 추가된 jq</li>')
}

function prependJs(){
    let ul = document.querySelector(".colors");
    let li = document.createElement("li");
    li.innerHTML="<h4>첫 자식으로 추가된 js</h4>"

    ul.append(li)
}
function prependJq(){
    $('.colors').prepend('<li><h4>첫 자식으로 추가된 jq</h4></li>')
}

function beforeJs(){
    let green = document.querySelector(".green")
    let li = document.createElement("li");
    li.innerText= "이전 형제요소로 추가된 js"

    green.before(li);
}
function beforeJq(){
    $(".green").before("<li>이전 형제요소로 추가된 jq</li>")
}

function afterJs(){
    let green = document.querySelector(".green")
    let li = document.createElement("li");
    li.innerText= "다음 형제요소로 추가된 js"

    green.after(li);
}
function afterJq(){
    $(".green").after("<li>다음 형제요소로 추가된 jq</li>")
}