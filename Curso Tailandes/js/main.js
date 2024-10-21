// Almacena el contenido del h1 
const myHeading = document.querySelector("h1");
// Cambia dicho contenido
myHeading.textContent = "Hello world!";

// Iniciarlizar variables
let variable = 'Bob Toronja';

// Agrega un evento al hacer click
document.querySelector('html').addEventListener("click", function(){
    alert('Ouch! stop poking me!');
});

// almacena la imagen 
const imagenes = document.querySelector("img");

// Evento al hacer click
imagenes.onclick = () => {
    // Captura el atributo src
    const mysrc = imagenes.getAttribute('src');
    if (mysrc === "../images/firefox-icon.png") {
        imagenes.setAttribute("src", "../images/Firefox-Logo-.png");
    } else {
        imagenes.setAttribute("src", '../images/firefox-icon.png');
    }
};


let myButton = document.querySelector("button");
let titulo = document.querySelector("h1");


function setuser() {
    const nombre = prompt("Introduzca su nombre");
    if (!nombre) {
        setuser()
    }else {
        localStorage.setItem('name', nombre);
        titulo.textContent = `Mozilla is cool, ${nombre}`; 
    }
 
}

if (!localStorage.getItem("name")) {
    setuser();
} else {
    const storedName = localStorage.getItem("name");
    titulo.textContent = `Mozilla is cool, ${storedName}`;
}


myButton.onclick = () => {
    setuser();
};
