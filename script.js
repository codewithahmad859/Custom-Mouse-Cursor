var body = document.getElementById("main");
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

body.addEventListener("mousemove",function(e){
    gsap.to(cursor,{
        x:e.x,
        y:e.y
    })
})
