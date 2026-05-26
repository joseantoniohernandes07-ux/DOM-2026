// Vamos a seleccionar el h1 a través de su clase.

const titulo = document.querySelector(`.titulo`)

// Mostremos el elemento seleccionado por consola

console.log(titulo)

/* 

  Objeto Style

  Podemos acceder a el a traves de la notacion de unto (.)

  👉 nodo.style

  Resultado es CSS style declaration. Es decir una lista que representa todas las propiedades de estilo de un elemento.

  Las propiedades cambian del formato "kebab-case" a "camelCase"

*/

console.log(titulo.style);

/* 

  Para acceder a las propiedades de estilo usamos la notacion de punto (.)

  ndo.style.nombrePropiedad

  Unicamente se mostraran en el CSSStyleDeclaration los valores de los estilos en linea. Declarados directamente en el HTML.

*/

console.log(titulo.style.color);

/* 

  Podemos asignar un valor a la propiedad de estilo del nodo seleccionado

  nodo.style.nombrePropiedad = valor

*/

titulo.style.color = "orange";
titulo.style.backgroundColor = "purple";
titulo.style.fontSize = "60px";

console.log(titulo.style.color);

/* 

  Metodo setPropety()

  Asigna una propiedad de estlo a un elemento seleccionado.

  Sintaxis:

  nodo.style.setProperty(nombrePropiedad, valor, important);

  -Mas flexible y por lo tanto la mas usada.
  -Las propiedades de estilo se escriben en kebab-case.
  -Hay un tercerparametro "important" es opcional.

*/

titulo.style.setProperty("color", "darkblue")
titulo.style.setProperty("background-color", "white", "important");

/* 

  Eliminar valores de propiedades del nodo seleccionado.

    nodo.style.nombrePropiedad = ""

  -Asignamos una cadena vacia al valor de la propiedad.
  -En esta sintaxis el nombre de la propiedad va en camelCase

*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 

  Metodo removeProperty()

  Esto elimina la propiedad de estilo de un nodo.

  Sintaxis:

  nodo.style.removeProperty("nombre-propiedad");

  - En esta forma el nombre de la propiedad va en kebab-case

*/

titulo.style.removeProperty("font-size")