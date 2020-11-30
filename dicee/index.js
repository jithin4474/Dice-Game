
document.querySelector("button").addEventListener("click",function(){
var p1=Math.floor((Math.random()*6))+1;
var p2=Math.floor((Math.random()*6))+1;

var str1="images/dice"+p1+".png";
var str2="images/dice"+p2+".png";
document.querySelector(".img1").setAttribute("src", str1);
document.querySelector(".img2").setAttribute("src",str2);

if(p1===p2){
  document.querySelector("h1").innerHTML="Draw";
}else if(p1>p2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}else if(p2>p1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
})
