let valorSeleccionado;
let cantidad = 0;
let currentArray;

const importantUrgent_list = document.getElementById("important-urgent__id");
const importantNoUrgent_list = document.getElementById("important-not-urgent__id");
const NoimportantUrgent_list = document.getElementById("not-important-urgent__id");
const NoimportantNoUrgent_list = document.getElementById("not-important-not-urgent__id");
const Eliminar = document.getElementById("eliminar");


function agregarString() { //Agrega el string ingresado en el input en unos de los 5 arrays correspondiente.
  let userInput = document.getElementById("inputId").value; //toma el valor que escribio el usuario y lo guarda momentaneamente en userInput
  if (userInput !== "") { //Si lo que ingresa el usuario es diferente de nada pasará
  let elementosDiv = document.getElementById(valorSeleccionado); //Obtiene el id del div al que queremos agregarle mas elementos
  const elementoDiv = document.createElement("div"); //Crea un elemento div y lo asigna a la variable elemento
    elementoDiv.classList.add("element"); //Le asigna al div la clase "elemento"
    elementoDiv.setAttribute('data-id', userInput);
    elementoDiv.textContent = userInput; //Le agrega texto al div creado anteriormente con el ultimo elemento del array correspondiente
    elementosDiv.appendChild(elementoDiv); // Agrega el nuevo Div creado dentro de el Div contenedor de una de las 4 secciones
    if (valorSeleccionado=="important-urgent__id") {
      const IU = importantUrgent.toArray();
      localStorage.setItem("IU", IU.join("-"));
    } else if (valorSeleccionado=="important-not-urgent__id"){
      const INU = importantNoUrgent.toArray();
      localStorage.setItem("INU", INU.join("-"));
    }
    else if (valorSeleccionado=="not-important-urgent__id"){
      const NIU = noImportantUrgent.toArray();
      localStorage.setItem("NIU", NIU.join("-"));
    }
    else if (valorSeleccionado=="not-important-not-urgent__id"){
      const NINU = noImportantNoUrgent.toArray();
      localStorage.setItem("NINU", NINU.join("-"));
    }
  }
}








function clase(){ //Medianto lo seleccionado en el selector asigna un id y al current array correspondiente
  var select = document.getElementById("select");
  valorSeleccionado = select.value;
}

function reiniciarString(e) { //Limpia todos los string al igual que en el local storage.
  if(!confirm('Are you sure?')) {
    e.preventDefault();
  }
  localStorage.clear();

  while (importantUrgent_list.children.length) {
    importantUrgent_list.removeChild(importantUrgent_list.firstChild);
  }

  while (importantNoUrgent_list.children.length) {
    importantNoUrgent_list.removeChild(importantNoUrgent_list.firstChild);
  }

  while (NoimportantUrgent_list.children.length) {
    NoimportantUrgent_list.removeChild(NoimportantUrgent_list.firstChild);

  }
  while (NoimportantNoUrgent_list.children.length) {
    NoimportantNoUrgent_list.removeChild(NoimportantNoUrgent_list.firstChild);
  }
}

 function activarBoton(event) { //Hace que el input se active con enter
  if (event.keyCode === 13) {
    agregarString();
  }
}



let importantUrgent = new Sortable(importantUrgent_list, {
    group: 'shared', // set both lists to same group
    animation: 150,
    dragClass: "sortable-drag",
    filter: '.filtered',
    store: {
      set: (sortable) => {
        const IU = sortable.toArray();
        localStorage.setItem("IU", IU.join("-"));
      },
      get: (sortable) => {
        const conjunto = localStorage.getItem("IU");

        if (conjunto !== '') {
          const array = conjunto.split('-');
          for (var i = 0; i < array.length; i++) {
            let contenedorPadreIU = document.getElementById("important-urgent__id");
            let contenedorHijoIU = document.createElement("div");
            contenedorHijoIU.classList.add("element");
            contenedorHijoIU.setAttribute('data-id', array[i]);
            contenedorHijoIU.textContent = array[i];
            contenedorPadreIU.appendChild(contenedorHijoIU);}
          } 
        },
        onDeselect: (evt) => {
          console.log('onChoose');
        },
        
      }
    });

let importantNoUrgent = new Sortable(importantNoUrgent_list, {
  group: 'shared',
  animation: 150,
  dragClass: "sortable-drag",
  filter: '.filtered',
  store: {
    set: (sortable) => {
      const INU = sortable.toArray();
      localStorage.setItem("INU", INU.join("-"));
    },
    get: (sortable) => {
      const conjunto = localStorage.getItem("INU");
      if (conjunto !== '') {
        const array = conjunto.split('-');
        for (var i = 0; i < array.length; i++) {
          let contenedorPadreIU = document.getElementById("important-not-urgent__id");
          let contenedorHijoIU = document.createElement("div");
          contenedorHijoIU.classList.add("element");
          contenedorHijoIU.setAttribute('data-id', array[i]);
          contenedorHijoIU.textContent = array[i];
          contenedorPadreIU.appendChild(contenedorHijoIU);} 
        } 
      } 
    }

  });

let noImportantUrgent = new Sortable(NoimportantUrgent_list, {
    group: 'shared', // set both lists to same group
    animation: 150,
    dragClass: "sortable-drag",
    filter: '.filtered',
    store: {
      set: (sortable) => {
        const NIU = sortable.toArray();
        localStorage.setItem("NIU", NIU.join("-"));
      },
      get: (sortable) => {
       const conjunto = localStorage.getItem("NIU");
       if (conjunto !== '') {
         const array = conjunto.split('-');
         for (var i = 0; i < array.length; i++) {
          let contenedorPadreIU = document.getElementById("not-important-urgent__id");
          let contenedorHijoIU = document.createElement("div");
          contenedorHijoIU.classList.add("element");
          contenedorHijoIU.setAttribute('data-id', array[i]);
          contenedorHijoIU.textContent = array[i];
          contenedorPadreIU.appendChild(contenedorHijoIU);}
        } 
      } 
    }

  });

let noImportantNoUrgent = new Sortable(NoimportantNoUrgent_list, {
  group: 'shared',
  animation: 150,
  dragClass: "sortable-drag",
  filter: '.filtered',
  store: {
    set: (sortable) => {
      const NINU = sortable.toArray();
      localStorage.setItem("NINU", NINU.join("-"));
    },
    get: (sortable) => {
      const conjunto = localStorage.getItem("NINU");
      if (conjunto !== '') {
        const array = conjunto.split('-');
        for (var i = 0; i < array.length; i++) {
          let contenedorPadreIU = document.getElementById("not-important-not-urgent__id");
          let contenedorHijoIU = document.createElement("div");
          contenedorHijoIU.classList.add("element");
          contenedorHijoIU.setAttribute('data-id', array[i]);
          contenedorHijoIU.textContent = array[i];
          contenedorPadreIU.appendChild(contenedorHijoIU);}
        } 
      } 
    }
  });

new Sortable(Eliminar, {
  group: 'shared',
  animation: 150,
  dragClass: "sortable-drag",
  filter: '.filtered',
  onAdd: function (/**Event*/evt) {
    while (Eliminar.children.length) {
    Eliminar.removeChild(Eliminar.firstChild);
  }
  },
  });