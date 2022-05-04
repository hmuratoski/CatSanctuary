let h=document.getElementById("cardadvanced");
let h2=document.getElementById("cardadvanced1");


h.classList.toggle("shading");
h2.classList.toggle("shading");




let header=document.querySelector("h2");
header.addEventListener("mouseover" ,ChangeOptions)

function ChangeOptions(){
header.classList.toggle("important");
}





