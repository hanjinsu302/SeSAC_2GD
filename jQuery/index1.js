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