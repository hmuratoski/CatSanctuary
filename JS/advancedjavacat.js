let header1=document.getElementById("cardadvanced2");
let header2=document.getElementById("cardadvanced1");


header1.classList.toggle("shading");
header2.classList.toggle("shading");




let header=document.querySelector("h2");
header.addEventListener("mouseover" ,ChangeOptions)

function ChangeOptions(){
header.classList.toggle("important");
}

fetch('https://cataas.com/cat')
    .then(
        data => {
    document.getElementById('print-here').innerHTML += "<img src=\"" + data.image + "\"/>";
    document.getElementById('print-here').innerHTML += '<img src="' + data.image + '">';
        }
    );



