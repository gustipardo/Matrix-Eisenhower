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
        if (conjunto !== '' && conjunto !== null) {
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
  document.getElementById('inputId').value = '';
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



const botonDescargar = document.getElementById("boton-descargar");


botonDescargar.addEventListener("click", function() {
const arrayIU = localStorage.getItem("IU");
const arrayINU = localStorage.getItem("INU");
const arrayNIU = localStorage.getItem("NIU");
const arrayNINU = localStorage.getItem("NINU");

  // Crear un objeto Blob a partir del array
  const arraysJSON = JSON.stringify({ arrayIU, arrayINU, arrayNIU, arrayNINU });
  const blob = new Blob([arraysJSON], { type: 'application/json' });


  // Crear un objeto URL a partir del objeto Blob
  const url = URL.createObjectURL(blob);

  // Crear un elemento "a" con el enlace de descarga
  const enlaceDescarga = document.createElement("a");
  enlaceDescarga.href = url;
  enlaceDescarga.download = "MiMatriz.json";
  document.body.appendChild(enlaceDescarga);

  // Simular un clic en el enlace de descarga
  enlaceDescarga.click();

  // Eliminar el elemento "a"
  document.body.removeChild(enlaceDescarga);

  // Liberar el objeto URL
  URL.revokeObjectURL(url);
});








const dropzone = document.getElementById('dropzone');

// Agregar un manejador de eventos para el evento "dragover" en el div dropzone
dropzone.addEventListener('dragover', (evento) => {
  evento.preventDefault(); // prevenir comportamiento por defecto
  dropzone.classList.add('active'); // añadir clase "active" al div
});

// Agregar un manejador de eventos para el evento "dragleave" en el div dropzone
dropzone.addEventListener('dragleave', (evento) => {
  dropzone.classList.remove('active'); // eliminar clase "active" del div
});

// Agregar un manejador de eventos para el evento "drop" en el div dropzone
dropzone.addEventListener('drop', (evento) => {
  evento.preventDefault(); // prevenir comportamiento por defecto
  dropzone.classList.remove('active'); // eliminar clase "active" del div
  const archivo = evento.dataTransfer.files[0]; // obtener archivo arrastrado
  leerArchivo(archivo);
});

// Agregar un manejador de eventos para el evento "change" en el input fileUpload
const fileUpload = document.getElementById("file-upload");
fileUpload.addEventListener("change", (evento) => {
  const archivo = evento.target.files[0]; // obtener archivo seleccionado por el usuario
  leerArchivo(archivo);
});

// Función para leer el contenido del archivo
function leerArchivo(archivo) {
  const lector = new FileReader(); // crear objeto FileReader
  lector.onload = function() {
    const contenido = lector.result; // obtener contenido del archivo
    const { arrayIU, arrayINU, arrayNIU, arrayNINU } = JSON.parse(contenido);
    localStorage.setItem("IU", arrayIU);
    localStorage.setItem("INU", arrayINU);
    localStorage.setItem("NIU", arrayNIU);
    localStorage.setItem("NINU", arrayNINU);
    location.reload();
  }
  lector.readAsText(archivo); // leer archivo como texto
}


