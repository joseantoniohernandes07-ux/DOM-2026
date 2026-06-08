/* 

  Eventos

  Un evento es una accion o suceso que ocurre en el navegador o en un elemento del DOM.
  Pueden ser iniciados por los usuarios o tambien por el sistema. Los events pueden ser "manejados" por JS.

  + Manejar eventos con JV 

  1.- Target (objetivo o blanco) 🎯

    Es el elemento del DOM en el que a ocurrido el evento. El targert se va a encontrar dentro de un  objeto llamado evento (event) y podemos acceder a ese objeto mediante la propiedad "event.target" 
  
  2.- Event Listener (Escuchador de eventos)👂

    Es el "oido" que esta atento a que ocurra el evento en el elemento (target) en específico.

  3.- Trigger (Disparador o Desencadenante)🔫

    Es el que desencadena que el evento ocurra. Es la accion que realiza el usuario o el sistema para   activar el evento.

      +Hacer clic
      +Mover el raton
      +Tipear teclas
      +...
  
  4.- Event Handler (Manejador de eventos) 🚗

   Es una funcion que se ejecuta cada que ocurre el triguer. Con JS le decimos que se va a ejecutar.

     +Mostrar un mensaje
     +Cambiar de color
     +Agregar un elemento
     +Lanza una alerta

  Sintaxis:

  target.eventListener(trigger , eventHandler)

  Target👉 Elemento donde el evento 
  Listener👉 escucha y dtecta el evento
  Trigger👉 Accion que ocurre
  Handler👉 La funcion que se ejecuta cuando ocurre el evento

*/

// Traemos el boton a JS

const botoncito = document.getElementById("botoncito");

// Manejar el evento

botoncito.addEventListener(`click` , mostrarMensaje );

// Definir funcion externa

function mostrarMensaje() {
  // Codigo que se ejecuta al llamar a la funcion
  alert("Ya vamonos por favor¡ 😉");
}