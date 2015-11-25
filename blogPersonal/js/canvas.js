var micolor="green";
var miotrocolor="white";
var mitercercolor="blue";
var escala=0.5;


var c=document.getElementById("comentario1");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.fillStyle =micolor;
ctx.arc(30, 30 ,30 , 0, Math.PI*2, false);
ctx.fill();
ctx.font = '34px "Helvetica"';
ctx.fillStyle=miotrocolor;
ctx.fillText("P", 18, 42);


var c=document.getElementById("comentario2");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.fillStyle =mitercercolor;
ctx.arc(30, 30 ,30 , 0, Math.PI*2, false);
ctx.fill();
ctx.font = '34px "Helvetica"';
ctx.fillStyle=miotrocolor;
ctx.fillText("K", 18, 42);