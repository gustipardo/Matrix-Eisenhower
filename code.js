let importantUrgent = [];
let importantNoUrgent = [];
let NoimportantUrgent = [];
let NoimportantNoUrgent = [];
let valorSeleccionado;
let elementosDiv;
let cantidad = 0;
let currentArray;




function agregarString() {
  elementosDiv = document.getElementById(valorSeleccionado); //Obtiene el id del div al que queremos agregarle mas elementos
  let userInput = document.getElementById("inputId").value; //toma el valor que escribio el usuario y lo guarda momentaneamente en userInput
  const elementoDiv = document.createElement("div"); //Crea un elemento div y lo asigna a la variable elemento
  if (userInput !== "") { //Si lo que ingresa el usuario es diferente de nada pasará
    currentArray.push(userInput); //Agrega el string del usuario al array correspondiente
    elementoDiv.classList.add("element"); //Le asigna al div la clase "elemento"
    elementoDiv.textContent = currentArray[currentArray.length - 1]; //Le agrega texto al div creado anteriormente con el ultimo elemento del array correspondiente
    elementosDiv.appendChild(elementoDiv); // Agrega el nuevo Div creado dentro de el Div contenedor de una de las 4 secciones
    console.log(importantUrgent,importantNoUrgent,NoimportantUrgent,NoimportantNoUrgent); //Muestra los arrays en consola
    localStorage.setItem('importantUrgent', JSON.stringify(importantUrgent));
    localStorage.setItem('importantNoUrgent', JSON.stringify(importantNoUrgent));
    localStorage.setItem('NoimportantUrgent', JSON.stringify(NoimportantUrgent));
    localStorage.setItem('NoimportantNoUrgent', JSON.stringify(NoimportantNoUrgent));
  }
}

document.addEventListener('DOMContentLoaded', function Recharge() {
  if (JSON.parse(localStorage.getItem('importantUrgent')) !== null) {
  importantUrgent = JSON.parse(localStorage.getItem('importantUrgent'));
  }
  if (JSON.parse(localStorage.getItem('importantNoUrgent')) !== null) {
  importantNoUrgent = JSON.parse(localStorage.getItem('importantNoUrgent'));
  }
  if (JSON.parse(localStorage.getItem('NoimportantUrgent')) !== null) {
  NoimportantUrgent = JSON.parse(localStorage.getItem('NoimportantUrgent'));
  }
  if (JSON.parse(localStorage.getItem('NoimportantNoUrgent')) !== null) {
  NoimportantNoUrgent = JSON.parse(localStorage.getItem('NoimportantNoUrgent'));
  }


  for (var i = 0; i < importantUrgent.length; i++) {
    let contenedorPadreIU = document.getElementById("important-urgent__id");
    let contenedorHijoIU = document.createElement("div");
    contenedorHijoIU.classList.add("element");
    contenedorHijoIU.textContent = importantUrgent[i];
    contenedorPadreIU.appendChild(contenedorHijoIU);
  }
  for (var i = 0; i < importantNoUrgent.length; i++) {
    let contenedorPadreIU = document.getElementById("important-not-urgent__id");
    let contenedorHijoIU = document.createElement("div");
    contenedorHijoIU.classList.add("element");
    contenedorHijoIU.textContent = importantNoUrgent[i];
    contenedorPadreIU.appendChild(contenedorHijoIU);
  }
  for (var i = 0; i < NoimportantUrgent.length; i++) {
    let contenedorPadreIU = document.getElementById("not-important-urgent__id");
    let contenedorHijoIU = document.createElement("div");
    contenedorHijoIU.classList.add("element");
    contenedorHijoIU.textContent = NoimportantUrgent[i];
    contenedorPadreIU.appendChild(contenedorHijoIU);
  }
  for (var i = 0; i < NoimportantNoUrgent.length; i++) {
    let contenedorPadreIU = document.getElementById("not-important-not-urgent__id");
    let contenedorHijoIU = document.createElement("div");
    contenedorHijoIU.classList.add("element");
    contenedorHijoIU.textContent = NoimportantNoUrgent[i];
    contenedorPadreIU.appendChild(contenedorHijoIU);
  } 

  console.log(importantUrgent,importantNoUrgent,NoimportantUrgent,NoimportantNoUrgent);
});


function clase(){
  var select = document.getElementById("select");
  valorSeleccionado = select.value;
  if (valorSeleccionado=="important-urgent__id") {
    currentArray=importantUrgent;
  } else if (valorSeleccionado=="important-not-urgent__id"){
    currentArray=importantNoUrgent;
  }
  else if (valorSeleccionado=="not-important-urgent__id"){
    currentArray=NoimportantUrgent;
  }
  else if (valorSeleccionado=="not-important-not-urgent__id"){
    currentArray=NoimportantNoUrgent;
  }
    
}

function reiniciarString(e) {
if(!confirm('Are you sure?')) {
        e.preventDefault();
    }

let importantUrgent = [];
let importantNoUrgent = [];
let NoimportantUrgent = [];
let NoimportantNoUrgent = [];
let contenedorImportantUrgent = document.getElementById("important-urgent__id");
let contenedorImportantNoUrgent = document.getElementById("important-not-urgent__id");
let contenedorNoimportantUrgent = document.getElementById("not-important-urgent__id");
let contenedorNoimportantNoUrgent = document.getElementById("not-important-not-urgent__id");
localStorage.setItem('importantUrgent', JSON.stringify(importantUrgent));
localStorage.setItem('importantNoUrgent', JSON.stringify(importantNoUrgent));
localStorage.setItem('NoimportantUrgent', JSON.stringify(NoimportantUrgent));
localStorage.setItem('NoimportantNoUrgent', JSON.stringify(NoimportantNoUrgent));

while (contenedorImportantUrgent.children.length > 1) {
    contenedorImportantUrgent.removeChild(contenedorImportantUrgent.children[1]);
  }

while (contenedorImportantNoUrgent.children.length > 1) {
    contenedorImportantNoUrgent.removeChild(contenedorImportantNoUrgent.children[1]);
  }

  while (contenedorNoimportantUrgent.children.length > 1) {
    contenedorNoimportantUrgent.removeChild(contenedorNoimportantUrgent.children[1]);

  }
  while (contenedorNoimportantNoUrgent.children.length > 1) {
    contenedorNoimportantNoUrgent.removeChild(contenedorNoimportantNoUrgent.children[1]);
  }



}