/* 

  Primero devemos obtener un elemento de referencia. Un nodo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.querySelector("#peliculas");

/* 

  Para crear un elemento nuevo usamos creatElement()

  Sintaxis:

  document.createElement("tipoElemento")

*/

const nuevaPeli = document.createElement("li");

/* 

  Para agregar elemento en el DOM, tomamos el elemento de referencia y usamos el metodo append()

  Sintaxis

  nodoRef.append(nuevoNodo);

*/

peliculas.append(nuevaPeli);

/* 

  Agregamos nuevo conteido al nuevo elemento.

  Sintaxis

  nodo.innerTex = "valor";

*/

nuevaPeli.innerText =  "🦁 Rey leon 🐗";

/* 

  Reto Agregar las clases: peliculas y fondo-dos al nuevo elemento.

*/

nuevaPeli.classList.add("pelicula", "fondo-dos");
