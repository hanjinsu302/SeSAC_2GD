gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "power1", duration: 7});

const tl = gsap.timeline();

tl.from(".section03", {yPercent: 100})
  .from(".section04", {xPercent: -100})
  .from(".section05", {yPercent: 100})
  .from(".section06", {xPercent: 100})
  .from(".section07", {yPercent: 100})
  .from(".section08", {xPercent: -100})
  .from(".section09", {yPercent: 100})
  .from(".section10", {yPercent: 100});

ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top", 
  end: "+=8000",
  pin: true,
  scrub: true,
  anticipatePin: 1
});