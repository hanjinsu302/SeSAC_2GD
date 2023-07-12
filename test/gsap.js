gsap.from(".circle1", {
  x: -500,
  duration: 3,
  backgroundColor: "green",
  yPercent: 100,
  rotation: 180,
  scale: 2,
  repeat: 3, // animation을 3회 추가하는 것
  yoyo: true,
  ease: "linear",
  ease: "bounce.inOut",
  ease: "power1.out",
});

const staggerAll = document.querySelectorAll(".stagger");
console.log(staggerAll);
// from, to의 target 으로는 배열 형태가 와도 됨
gsap.from(staggerAll, {
  ease: "elastic",
  duration: 3,
  scale: 0.5,
  stagger: 1.5,
  repeat: -1,
});

staggerAll.forEach((circle) => {
  circle.addEventListener("click", () => {
    gsap.to(".stagger", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
});


// timeline 사용
// 연속적인 애니메이션을 만들기 위해 사용
  let tl = gsap.timeline();

//  tl.to('.skyblue',{
//     x: 400,
//     duration: 2,
//  });


//  tl.to('.gray',{
//     x: 500,
//     duration: 2,
//  });


//  tl.to('.yellow',{
//     x: 600,
//     duration: 3,
//  });

tl.to(".skybkue",{
    x:400,
    duration: 2,
})
.to(
    ".gray",{
        x: 500,
        duration: 2,
    },
    "<"// 같이
)
.to(
    ".yellow",
    {
        x: 600,
        duration: 3,
    },
    "+=5"// 지연시간
)

