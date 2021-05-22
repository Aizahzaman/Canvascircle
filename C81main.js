var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle= color;
ctx.linewidth=3;
ctx.arc(200,450,15,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",MouseDown);

function MouseDown(e){
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log(mouse_x +","+mouse_y);
color=document.getElementById("input").value;
circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.linewidth=3;
    ctx.arc(mouse_x,mouse_y,30,0,2*Math.PI);
    ctx.stroke();
}
function clearcanvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}