let header23=document.getElementById("cardadvanced2");
let h2=document.getElementById("cardadvanced1");

header23.classList.toggle("shading");
h2.classList.toggle("shading");




let header=document.querySelector("h2");
header.addEventListener("mouseover" ,ChangeOptions)

function ChangeOptions(){
header.classList.toggle("important");
}

fetch('https://cataas.com/cat')
    .then(response => response.json())
    .then(
        data => {
            document.getElementById('print-here').innerHTML += "<img src=\"" + data.image + "\"/>";
            document.getElementById('print-here').innerHTML += '<img src="' + data.image + '">';
        }
    );

//



