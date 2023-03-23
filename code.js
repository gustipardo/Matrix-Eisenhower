let importantUrgent_list = document.getElementById("important-urgent__id");
let importantNoUrgent_list = document.getElementById("important-not-urgent__id");
let NoimportantUrgent_list = document.getElementById("not-important-urgent__id");
let NoimportantNoUrgent_list = document.getElementById("not-important-not-urgent__id");
let Eliminar = document.getElementById("eliminar");

//Lo siguiente agrega 5 listas, 4 para las clasificaciones y 1 para eliminar elementos.
function createSortableList(listElement, groupName, storeName) {
  let sortableList = new Sortable(listElement, {
    group: groupName,
    animation: 150,
    dragClass: "sortable-drag",
    filter: '.filtered',
    store: {
      set: (sortable) => {
        const listData = sortable.toArray();
        localStorage.setItem(storeName, listData.join("-"));
      },
      get: (sortable) => {
        const conjunto = localStorage.getItem(storeName);
        if (conjunto !== null) {
          const array = conjunto.split('-');
          array.forEach(item => {
          let contenedorPadreIU = listElement;
          let contenedorHijoIU = document.createElement("div");
          contenedorHijoIU.classList.add("element");
          contenedorHijoIU.setAttribute('data-id', item);
          contenedorHijoIU.textContent  = item;
          contenedorPadreIU.appendChild(contenedorHijoIU);
          });
        }
      }
    }
  });
  return sortableList;
}

let importantUrgent = createSortableList(importantUrgent_list, 'shared', 'IU');
let importantNoUrgent = createSortableList(importantNoUrgent_list, 'shared', 'INU');
let noImportantUrgent = createSortableList(NoimportantUrgent_list, 'shared', 'NIU');
let noImportantNoUrgent = createSortableList(NoimportantNoUrgent_list, 'shared', 'NINU');



function agregarString() { //Agrega el string ingresado en el input en unos de los 5 arrays correspondiente.
  let userInput = document.getElementById("inputId").value; //toma el valor que escribio el usuario y lo guarda momentaneamente en userInput
  if (userInput !== "") { //Si lo que ingresa el usuario es diferente de nada pasará
  let valorSeleccionado = document.getElementById("select").value;
  let elementosDiv = document.getElementById(valorSeleccionado); //Obtiene el id del div al que queremos agregarle mas elementos
  const elementoDiv = document.createElement("div"); //Crea un elemento div y lo asigna a la variable elemento
    elementoDiv.classList.add("element"); //Le asigna al div la clase "elemento"
    elementoDiv.setAttribute('data-id', userInput);
    elementoDiv.textContent = userInput; //Le agrega texto al div creado anteriormente con el ultimo elemento del array correspondiente
    elementosDiv.appendChild(elementoDiv); // Agrega el nuevo Div creado dentro de el Div contenedor de una de las 4 secciones

const listas = {
  "important-urgent__id": {lista: importantUrgent, clave: "IU"},
  "important-not-urgent__id": {lista: importantNoUrgent, clave: "INU"},
  "not-important-urgent__id": {lista: noImportantUrgent, clave: "NIU"},
  "not-important-not-urgent__id": {lista: noImportantNoUrgent, clave: "NINU"}
};

const {lista, clave} = listas[valorSeleccionado];
localStorage.setItem(clave, lista.toArray().join("-"));
  }
}


function reiniciarString(e) { //Limpia todos los string al igual que en el local storage y tambien elimina los elementos.
  if(!confirm('Are you sure?')) {
    e.preventDefault();
  }
  localStorage.clear();

  const UserArrays = [importantUrgent_list, importantNoUrgent_list, NoimportantUrgent_list, NoimportantNoUrgent_list];

UserArrays.forEach(array => {
  while (array.children.length) {
    array.removeChild(array.firstChild);
  }
});

}

 function activarBoton(event) { //Hace que el input se active con enter
  if (event.keyCode === 13) {
    agregarString();
  }
}


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