
//JS manipulation to kitty blog card-titles;
let header3=document.getElementById("cardadvanced2");
let header2=document.getElementById("cardadvanced1");

//Activating the option and searching it from CSS:
header3.classList.toggle("shading");
header2.classList.toggle("shading");



//Manipulation of a header with an mouseover and a function
let header=document.querySelector("h2");
header.addEventListener("mouseover" ,ChangeOptions)

function ChangeOptions(){
header.classList.toggle("important");
}
// Removing the lower header fron the blogpage;
const element = document.getElementById('remove');
element.remove(); // 


