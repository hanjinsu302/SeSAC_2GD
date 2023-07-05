const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')

btn1.addEventListener("click", function(){
    alert('btn 1 click!!')
})

btn1.addEventListener('mouseover',function(){
    btn1.style.backgroundColor = "gray"
})

const container = document.getElementById('container');
console.log(container)
btn2.addEventListener('click',() => {
    const div = document.createElement("div")
    div.innerText ="hi"
    div.style.backgroundColor = 'pink'
    container.append(div)

})

function changeColor(){
    const divs = document.querySelectorAll('#container div')
    for(div of divs){
       div.style.backgroundColor = 'skyblue'
    }
    divs[divs.length - 1].style.backgroundColor = "red"
}


btn3.addEventListener('click', changeColor)


function changeBtnColor(){
    this.style.backgroundColor ='yellow'
    this.style.color = "white"
}
btn4.addEventListener("click",changeBtnColor)


//scroll
console.log(window);
window.addEventListener('scroll',()=>{
    console.log(scrollY)
    if(scrollY >700){
        document.querySelector('.pos').style.opacity = "1"
    }
        
    
})