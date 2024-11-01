const button = document.getElementById("btn-id");

const color = ["green","red","rgba(133,122,200,)","#f15025"];
button.addEventListener("click",function() {
    //choisir la couleur au hasard
    const randomNumber = Math.floor(Math.random() * color.length);
    const x = color[randomNumber];
    //changer la couleur d fond de la page
    const dodo = document.querySelector("body");
    dodo.style.backgroundColor = x;
    //changer la couleur de text
    const y = document.querySelector("span.color");    
    y.style.color = x;
    y.textContent = x;
})