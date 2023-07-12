console.log(window);
console.log($(window));

console.log(document)
console.log($(document))

//mouse event
//click
//on은 addEventListener와 같은 의미
// $(".p-msg").on("click",function() {
//     $(this).css('color','blue')
// })

$('.p-msg').click(function(){
    $(this).css("color","red")
});

$('.num').click(function(){
    // $(this).css("color","yellow")// 클릭한 num만 바뀜
    // $(".num").css("color","yellow")// num 전체가 바뀜
})

const nums = document.querySelectorAll(".num");
//nums = [one, two, three, four]
for(let i = 0; i< nums.length; i++){
    nums[i].addEventListener('click',()=>{
        console.log(nums[i])
        nums[i].style.color = 'tomato';
    })

}

/* mouseover */
// $('.numbers').on('mouseover', () => {
//     $('.numbers').css("background-color","skyblue");
//     $(".numbers").append("<div>mouseover로 추가된 자식</div>")
// })

// $('.numbers').mouseover(()=>{
//     $('.numbers').css("background-color","pink");
//     $(".numbers").append("<div>mouseover로 추가된 자식</div>")

// })
/*hover()*/
//올렸을 때와 떼었을 때 함수 두개 정의
$(".div-hover").hover(
    function(){
        $(this).addClass("hover")
    }, 
    function(){
        $(this).removeClass("hover")
    })


    //key event
    $('.input-key').keydown(function(e){
        console.log(e.code)
        if(e.code === "ArrowUp") {
            console.log("up")
        }
    })



    $('#form').submit(function(e){
        e.preventDefault();
        const todo = $('#todo').val();
        console.log(todo);
        $('.todos').append(`<li>${todo}</li>`) //ul에 li를 만들고 추가

        $('#todo').val("")

    })