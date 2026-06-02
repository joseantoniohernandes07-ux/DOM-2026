// Acceder al primer elemento de la lista

const botana = document.querySelector(".botana");

// Mostrar por consola

console.log(botana);

/* 

  Propiedad classList

  Devuelve un Dom Token List o Listado de Clases en el DOM. La lista de clases de un elemento de html.

  nodo.classList

*/

console.log(botana.classList);
console.log(botana.classList[1]); //semilla

/* 

  Podemos agregar clases usando el metodo add()

  Sintaxis

  nodo.classList

*/

const complemento = document.querySelectorAll(".botana");

console.log(complemento[3]);

complemento[3].classList.add("picante");

console.log(complemento[3].classList);

/* 

  Podemos verificar si existe una clase en un elemento con el metodo contains()

  Sintaxis:

  nodo.classList.contains("nombre-clase");

  -Devuelve "true" si existe la clase.
  -Devuelve "false" si no existe la clase.

*/

console.log( complemento[3].classList.contains("picante") ); // True
console.log( botana.classList.contains("picante") ); // False

/* 

  Podemos eliminar una clase usando el metodo remove();

  Sintaxis:

  nodo.classList.remove("nombre-clase");

*/

botana.classList.remove("botana");

console.log(botana.classList)

complemento[3].classList.remove("picante")

console.log(complemento[3].classList)