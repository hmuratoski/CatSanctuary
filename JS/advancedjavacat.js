let header3=document.getElementById("cardadvanced2");
let header2=document.getElementById("cardadvanced1");


header3.classList.toggle("shading");
header2.classList.toggle("shading");




let header=document.querySelector("h2");
header.addEventListener("mouseover" ,ChangeOptions)

function ChangeOptions(){
header.classList.toggle("important");
}





